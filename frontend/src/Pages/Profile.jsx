import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
    const { user, isAuthenticated, updateProfile } = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile_number: "",
        address: "",
        profile_image: null, // file object (for upload)
    });

    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [preview, setPreview] = useState(null); // string URL (backend or local)

    // Fill form with current user data
    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                email: user.email || "",
                mobile_number: user.mobile_number || "",
                address: user.address || "",
                profile_image: null, // we don't preload as a File object
            });
            setPreview(user.profile_image || null); // existing image from backend (if any)
        }
    }, [user]);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setForm((prev) => ({
            ...prev,
            profile_image: file,
        }));

        // local preview for the newly selected file
        setPreview(URL.createObjectURL(file));
    };

    const extractErrors = (err) => {
        const msgs = [];
        if (err.response && err.response.data) {
            const data = err.response.data;
            if (typeof data === "string") {
                msgs.push(data);
            } else if (data.detail) {
                msgs.push(data.detail);
            } else {
                Object.entries(data).forEach(([field, value]) => {
                    if (Array.isArray(value)) {
                        value.forEach((v) =>
                            msgs.push(field === "non_field_errors" ? v : `${field}: ${v}`)
                        );
                    } else {
                        msgs.push(
                            field === "non_field_errors" ? value : `${field}: ${value}`
                        );
                    }
                });
            }
        } else {
            msgs.push("Something went wrong. Please try again.");
        }
        return msgs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");
        setErrors([]);

        try {
            // Build FormData so we can send file + text fields
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                if (value !== null && value !== "") {
                    formData.append(key, value);
                }
            });

            await updateProfile(formData); // updateProfile must handle multipart/form-data
            setMessage("Profile updated successfully.");
        } catch (err) {
            console.error(err);
            setErrors(extractErrors(err));
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="profile-page">
            <div className="profile-card">
                <h2>Your Profile</h2>

                {(errors.length > 0 || message) && (
                    <div className="profile-alerts">
                        {errors.length > 0 && (
                            <div className="alert alert-error">
                                <span className="alert-title">Please fix the following:</span>
                                <ul>
                                    {errors.map((err, i) => (
                                        <li key={i}>{err}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {message && (
                            <div className="alert alert-success">
                                <span className="alert-title">Success</span>
                                <p>{message}</p>
                            </div>
                        )}
                    </div>
                )}


                <form onSubmit={handleSubmit} className="profile-form">
                    {/* Profile image upload + preview */}
                    <div className="profile-header">
                        <label className="image-upload">
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleFileChange}
                            />
                            <div className="image-preview">
                                {preview ? (
                                    <img src={preview} alt="Profile" />
                                ) : (
                                    <span>Upload Photo</span>
                                )}
                            </div>
                        </label>
                        <div className="profile-greeting-container">
                            <h3>Hello 👋,</h3> 
                            <span className="profile-greeting">{user?.name}</span> 
                        </div>
                    </div>


                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Mobile Number
                        <input
                            type="text"
                            name="mobile_number"
                            value={form.mobile_number}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Address
                        <textarea
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit" disabled={saving}>
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
}
