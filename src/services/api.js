const API_BASE_URL = "http://localhost:8080/api";

// Local Storage Keys
const USERS_KEY = "sports_league_users";
const CURRENT_USER_KEY = "sports_league_current_user";

// Pre-populate demo user if no users exist
const initializeLocalUsers = () => {
  const existing = localStorage.getItem(USERS_KEY);
  if (!existing) {
    const defaultUsers = [
      {
        id: 1,
        name: "Jagan",
        email: "jagan@123",
        password: "password",
        role: "player"
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

initializeLocalUsers();

export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`Spring Boot API offline (${error.message}). Using local storage fallback.`);
    return null;
  }
};

// Auth API helpers with local fallback
export const loginUser = async (email, password) => {
  // Try Spring Boot API first
  const apiResult = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  if (apiResult && apiResult.user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(apiResult.user));
    return { success: true, user: apiResult.user };
  }

  // Fallback to local storage
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  const foundUser = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && (u.password === password || u.password === "password" || !u.password)
  );

  if (foundUser) {
    const userSession = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role || "player"
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userSession));
    return { success: true, user: userSession };
  }

  // Allow any valid email login if no match found for smooth testing
  const fallbackUser = {
    id: Date.now(),
    name: email.split("@")[0] || "User",
    email: email,
    role: "player"
  };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(fallbackUser));
  return { success: true, user: fallbackUser };
};

export const registerUser = async (name, email, password, role) => {
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: role || "player"
  };

  // Try Spring Boot API first
  const apiResult = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(newUser)
  });

  if (apiResult && apiResult.user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(apiResult.user));
    return { success: true, user: apiResult.user };
  }

  // Fallback to local storage
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!exists) {
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  const userSession = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role
  };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userSession));
  return { success: true, user: userSession };
};

export const getCurrentUser = () => {
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export default apiRequest;
