// Girl profile data
const girlProfiles = [
  {
    id: 1,
    name: "Sarah Johnson",
    handle: "sarahjohnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "🎨 Creative Designer | 📸 Photography Lover | ✨ Living the dream",
    location: "New York, USA",
    website: "sarahjohnson.com",
    followers: 1250,
    following: 480,
    posts: 145,
  },
  {
    id: 2,
    name: "Emma Davis",
    handle: "emmadavis",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "🌍 Travel Enthusiast | 🍕 Food Explorer | 💫 Always smiling",
    location: "Paris, France",
    website: "emmadavis.travel",
    followers: 2100,
    following: 650,
    posts: 312,
  },
  {
    id: 3,
    name: "Jessica Lee",
    handle: "jessicalee",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "💼 Marketing Professional | 🎯 Goal Setter | 🚀 Always growing",
    location: "San Francisco, USA",
    website: "jessicalee.io",
    followers: 3450,
    following: 890,
    posts: 523,
  },
  {
    id: 4,
    name: "Olivia Brown",
    handle: "oliviabrown",
    avatar: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=400&h=400&fit=crop",
    bio: "🎵 Music Producer | 🎧 Audio Engineer | 🎶 Sound of Life",
    location: "London, UK",
    website: "oliviabrown.music",
    followers: 5600,
    following: 1200,
    posts: 789,
  },
  {
    id: 5,
    name: "Sophia Martinez",
    handle: "sophiamartinez",
    avatar: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop",
    bio: "📚 Author & Blogger | ✍️ Storyteller | 🌟 Dreamer",
    location: "Barcelona, Spain",
    website: "sophiamartinez.blog",
    followers: 4200,
    following: 920,
    posts: 456,
  },
  {
    id: 6,
    name: "Isabella White",
    handle: "isabellawhite",
    avatar: "https://images.unsplash.com/photo-1514888286974-6c03bf1a9dba?w=400&h=400&fit=crop",
    bio: "💄 Beauty Influencer | 💅 Fashion Lover | ✨ Glam Squad",
    location: "Los Angeles, USA",
    website: "isabellawhite.beauty",
    followers: 7800,
    following: 1500,
    posts: 1024,
  },
]

let currentUser = girlProfiles[0]
let theme = localStorage.getItem("theme") || "dark"
let currentView = "profile"
let sidebarCollapsed = false

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initApp()
  setupEventListeners()
  renderView("profile")
  applyTheme(theme)
})

function initApp() {
  const app = document.getElementById("app")

  app.innerHTML = `
        <div class="container">
            <!-- Sidebar -->
            <aside class="sidebar">
                <div class="sidebar-header">
                    <div class="sidebar-title">ChatterBox</div>
                    <button class="toggle-btn" id="toggleSidebar">☰</button>
                </div>
                <nav class="nav">
                    <button class="nav-item active" data-view="profile">
                        <span>👤</span>
                        <span>Profile</span>
                    </button>
                    <button class="nav-item" data-view="feed">
                        <span>🏠</span>
                        <span>Feed</span>
                    </button>
                    <button class="nav-item" data-view="messages">
                        <span>💬</span>
                        <span>Messages</span>
                    </button>
                    <button class="nav-item" data-view="notifications">
                        <span>❤️</span>
                        <span>Notifications</span>
                    </button>
                    <button class="nav-item" data-view="videocall">
                        <span>📹</span>
                        <span>Video Calls</span>
                    </button>
                    <button class="nav-item" data-view="explore">
                        <span>🔍</span>
                        <span>Explore</span>
                    </button>
                </nav>
                <div class="sidebar-footer">
                    <button class="theme-toggle" id="themeToggle">
                        <span id="themeIcon">🌙</span>
                        <span>Dark Mode</span>
                    </button>
                    <button class="logout-btn">Logout</button>
                </div>
            </aside>

            <!-- Main Content -->
            <div class="main-content">
                <!-- Profile View -->
                <div class="view active" data-view="profile">
                    <div class="profile-container">
                        <div class="cover-photo"></div>
                        
                        <div class="profile-header">
                            <div class="profile-avatar">
                                <img src="${currentUser.avatar}" alt="${currentUser.name}" class="avatar-img">
                                <button class="edit-photo-btn" id="editPhotoBtn">✏️</button>
                            </div>
                            
                            <div class="profile-info">
                                <h1 class="profile-name">${currentUser.name}</h1>
                                <p class="profile-handle">@${currentUser.handle}</p>
                                <p class="profile-bio">${currentUser.bio}</p>
                                
                                <div class="profile-stats">
                                    <div class="stat">
                                        <div class="stat-value">${currentUser.posts}</div>
                                        <div class="stat-label">Posts</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-value">${currentUser.followers.toLocaleString()}</div>
                                        <div class="stat-label">Followers</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-value">${currentUser.following.toLocaleString()}</div>
                                        <div class="stat-label">Following</div>
                                    </div>
                                </div>
                                
                                <div class="profile-actions">
                                    <button class="btn btn-primary" id="editProfileBtn">✏️ Edit Profile</button>
                                    <button class="btn btn-secondary" id="shareProfileBtn">🔗 Share Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feed View -->
                <div class="view" data-view="feed">
                    <div class="feed-container">
                        <h2 style="margin-bottom: 24px;">📰 Feed</h2>
                        <div id="feedContent">
                            ${generateFeed()}
                        </div>
                    </div>
                </div>

                <!-- Messages View -->
                <div class="view" data-view="messages">
                    <div class="feed-container">
                        <h2 style="margin-bottom: 24px;">💬 Messages</h2>
                        <div id="messagesContent">
                            ${generateMessages()}
                        </div>
                    </div>
                </div>

                <!-- Notifications View -->
                <div class="view" data-view="notifications">
                    <div class="feed-container">
                        <h2 style="margin-bottom: 24px;">❤️ Notifications</h2>
                        <div id="notificationsContent">
                            ${generateNotifications()}
                        </div>
                    </div>
                </div>

                <!-- Video Call View -->
                <div class="view" data-view="videocall">
                    <div class="feed-container">
                        <h2 style="margin-bottom: 24px;">📹 Video Calls</h2>
                        <div id="videocallContent">
                            ${generateVideoCall()}
                        </div>
                    </div>
                </div>

                <!-- Explore View -->
                <div class="view" data-view="explore">
                    <div class="feed-container">
                        <h2 style="margin-bottom: 24px;">🔍 Explore Creators</h2>
                        <div class="avatar-grid">
                            ${girlProfiles
                              .map(
                                (profile, index) => `
                                <div class="avatar-card" style="animation-delay: ${index * 0.1}s">
                                    <img src="${profile.avatar}" alt="${profile.name}" 
                                         style="cursor: pointer;" 
                                         onclick="switchProfile(${profile.id})">
                                    <div class="avatar-card-name">${profile.name}</div>
                                    <div class="avatar-card-handle">@${profile.handle}</div>
                                    <small style="color: var(--muted);">${profile.followers.toLocaleString()} followers</small>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Edit Photo Modal -->
            <div class="modal" id="editPhotoModal">
                <div class="modal-content">
                    <h2 class="modal-title">✏️ Edit Profile Picture</h2>
                    <div class="input-group">
                        <label class="input-label">Profile Picture URL</label>
                        <input type="text" class="input-field" id="photoUrlInput" 
                               placeholder="Enter image URL">
                        <img id="photoPreview" class="preview-img" style="display: none;">
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-secondary" onclick="closeModal('editPhotoModal')">Cancel</button>
                        <button class="btn btn-primary" onclick="saveProfilePhoto()">Save Picture</button>
                    </div>
                </div>
            </div>

            <!-- Share Profile Modal -->
            <div class="modal" id="shareProfileModal">
                <div class="modal-content">
                    <h2 class="modal-title">🔗 Share Your Profile</h2>
                    <p style="color: var(--muted); margin-bottom: 16px;">Share this link with others:</p>
                    <div class="input-group">
                        <input type="text" class="input-field" id="shareLink" readonly>
                        <button class="btn btn-primary" style="width: 100%; margin-top: 12px;" onclick="copyShareLink()">
                            📋 Copy Link
                        </button>
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-secondary" onclick="closeModal('shareProfileModal')">Close</button>
                    </div>
                </div>
            </div>

            <!-- Edit Profile Modal -->
            <div class="modal" id="editProfileModal">
                <div class="modal-content">
                    <h2 class="modal-title">✏️ Edit Profile</h2>
                    <div class="input-group">
                        <label class="input-label">Name</label>
                        <input type="text" class="input-field" id="editName" value="${currentUser.name}">
                    </div>
                    <div class="input-group">
                        <label class="input-label">Handle</label>
                        <input type="text" class="input-field" id="editHandle" value="${currentUser.handle}">
                    </div>
                    <div class="input-group">
                        <label class="input-label">Bio</label>
                        <textarea class="input-field" id="editBio" style="resize: vertical; min-height: 80px;">${currentUser.bio}</textarea>
                    </div>
                    <div class="input-group">
                        <label class="input-label">Location</label>
                        <input type="text" class="input-field" id="editLocation" value="${currentUser.location}">
                    </div>
                    <div class="input-group">
                        <label class="input-label">Website</label>
                        <input type="text" class="input-field" id="editWebsite" value="${currentUser.website}">
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-secondary" onclick="closeModal('editProfileModal')">Cancel</button>
                        <button class="btn btn-primary" onclick="saveProfileChanges()">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

function setupEventListeners() {
  // Sidebar toggle
  document.getElementById("toggleSidebar").addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar")
    const mainContent = document.querySelector(".main-content")
    sidebarCollapsed = !sidebarCollapsed
    sidebar.classList.toggle("collapsed")
    mainContent.classList.toggle("sidebar-collapsed")
  })

  // Navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const view = e.currentTarget.dataset.view
      renderView(view)

      document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"))
      e.currentTarget.classList.add("active")
    })
  })

  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", theme)
    applyTheme(theme)
  })

  // Profile buttons
  document.getElementById("editPhotoBtn").addEventListener("click", () => {
    document.getElementById("editPhotoModal").classList.add("active")
  })

  document.getElementById("editProfileBtn").addEventListener("click", () => {
    document.getElementById("editProfileModal").classList.add("active")
  })

  document.getElementById("shareProfileBtn").addEventListener("click", () => {
    const shareLink = `${window.location.origin}?profile=${currentUser.id}`
    document.getElementById("shareLink").value = shareLink
    document.getElementById("shareProfileModal").classList.add("active")
  })

  // Photo URL preview
  document.getElementById("photoUrlInput")?.addEventListener("input", (e) => {
    const preview = document.getElementById("photoPreview")
    if (e.target.value) {
      preview.src = e.target.value
      preview.style.display = "block"
      preview.onerror = () => {
        preview.style.display = "none"
      }
    } else {
      preview.style.display = "none"
    }
  })

  // Like button functionality
  document.addEventListener("click", (e) => {
    if (e.target.closest(".action-btn.like-btn")) {
      e.target.closest(".action-btn").classList.toggle("liked")
    }
  })
}

function renderView(view) {
  currentView = view
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"))
  document.querySelector(`[data-view="${view}"]`).classList.add("active")
}

function generateFeed() {
  return girlProfiles
    .map(
      (profile) => `
        <div class="post-card">
            <div class="post-header">
                <img src="${profile.avatar}" alt="${profile.name}" class="post-avatar">
                <div class="post-user-info">
                    <span class="post-name">${profile.name}</span>
                    <span class="post-handle">@${profile.handle}</span>
                </div>
            </div>
            <div class="post-content">
                ${profile.bio}
            </div>
            <div class="post-actions">
                <button class="action-btn like-btn">❤️ Like</button>
                <button class="action-btn">💬 Comment</button>
                <button class="action-btn">🔄 Share</button>
                <button class="action-btn">👁️ Views</button>
            </div>
        </div>
    `,
    )
    .join("")
}

function generateMessages() {
  return girlProfiles
    .map(
      (profile) => `
        <div class="post-card" style="cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.05)'" onmouseout="this.style.backgroundColor='var(--bg-card)'">
            <div class="post-header">
                <img src="${profile.avatar}" alt="${profile.name}" class="post-avatar">
                <div class="post-user-info" style="flex: 1;">
                    <span class="post-name">${profile.name}</span>
                    <span class="post-handle">Latest message from @${profile.handle}</span>
                </div>
                <span style="color: var(--primary);">💬</span>
            </div>
        </div>
    `,
    )
    .join("")
}

function generateNotifications() {
  return girlProfiles
    .slice(0, 3)
    .map(
      (profile) => `
        <div class="post-card" style="border-left: 4px solid var(--primary);">
            <div class="post-header">
                <img src="${profile.avatar}" alt="${profile.name}" class="post-avatar">
                <div class="post-user-info">
                    <span class="post-name">${profile.name}</span>
                    <span class="post-handle">❤️ Liked your post</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function generateVideoCall() {
  return `
        <div class="post-card" style="text-align: center; padding: 48px 32px;">
            <div style="font-size: 64px; margin-bottom: 16px;">📹</div>
            <h2 style="margin-bottom: 16px;">Start a Video Call</h2>
            <p style="color: var(--muted); margin-bottom: 24px;">Select a person to call from Messages</p>
            <button class="btn btn-primary" style="animation: pulse 2s ease-in-out infinite;">
                📹 Start Call
            </button>
        </div>
    `
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active")
}

function saveProfilePhoto() {
  const url = document.getElementById("photoUrlInput").value
  if (url) {
    currentUser.avatar = url
    document.querySelector(".avatar-img").src = url
    closeModal("editPhotoModal")
    document.getElementById("photoUrlInput").value = ""
  }
}

function copyShareLink() {
  const shareLink = document.getElementById("shareLink").value
  navigator.clipboard.writeText(shareLink).then(() => {
    alert("✅ Link copied to clipboard!")
  })
}

function saveProfileChanges() {
  currentUser.name = document.getElementById("editName").value
  currentUser.handle = document.getElementById("editHandle").value
  currentUser.bio = document.getElementById("editBio").value
  currentUser.location = document.getElementById("editLocation").value
  currentUser.website = document.getElementById("editWebsite").value

  // Update display
  document.querySelector(".profile-name").textContent = currentUser.name
  document.querySelector(".profile-handle").textContent = "@" + currentUser.handle
  document.querySelector(".profile-bio").textContent = currentUser.bio

  closeModal("editProfileModal")
}

function switchProfile(id) {
  const profile = girlProfiles.find((p) => p.id === id)
  if (profile) {
    currentUser = profile
    renderView("profile")
    initApp()
    setupEventListeners()
  }
}

function applyTheme(selectedTheme) {
  const body = document.body
  const themeIcon = document.getElementById("themeIcon")
  const themeText = document.querySelector(".theme-toggle span:last-child")

  if (selectedTheme === "light") {
    body.classList.add("light-theme")
    if (themeIcon) themeIcon.textContent = "☀️"
    if (themeText) themeText.textContent = "Light Mode"
  } else {
    body.classList.remove("light-theme")
    if (themeIcon) themeIcon.textContent = "🌙"
    if (themeText) themeText.textContent = "Dark Mode"
  }
}
const toggle = document.querySelector(".toggle-theme");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
