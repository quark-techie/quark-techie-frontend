import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  Button,
  Box,
  LinearProgress,
  Tooltip,
  Alert,
  CircularProgress,
  styled
} from "@mui/material";
import { FaInfoCircle, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "2rem auto",
  padding: theme.spacing(3),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)"
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    priority: "general",
    subject: "",
    message: "",
    department: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const departments = [
    { value: "technical", label: "Technical Support" },
    { value: "customer", label: "Customer Service" },
    { value: "sales", label: "Sales" },
    { value: "billing", label: "Billing" },
    { value: "other", label: "Other" }
  ];

  const priorities = [
    { value: "urgent", label: "Urgent", time: "2 hours", description: "Critical issues requiring immediate attention" },
    { value: "high", label: "High Priority", time: "24 hours", description: "Important matters needing quick resolution" },
    { value: "general", label: "General Inquiry", time: "48 hours", description: "Standard questions or requests" },
    { value: "feedback", label: "Feedback", time: "72 hours", description: "Suggestions or general feedback" }
  ];

  useEffect(() => {
    const calculateProgress = () => {
      const fields = Object.keys(formData);
      const filledFields = fields.filter(field => formData[field].length > 0);
      return (filledFields.length / fields.length) * 100;
    };
    setProgress(calculateProgress());
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long";
    }
    if (!formData.message || formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }
    if (!formData.department) {
      newErrors.department = "Please select a department";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSuccess(true);
        resetForm();
      } catch (error) {
        setErrors({ submit: "Failed to submit form. Please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      priority: "general",
      subject: "",
      message: "",
      department: ""
    });
    setErrors({});
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: "primary.main" }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
          We'll respond based on your inquiry priority
        </Typography>

        <LinearProgress variant="determinate" value={progress} sx={{ my: 2 }} />

        {success && (
          <Alert
            icon={<FaCheckCircle />}
            severity="success"
            sx={{ mb: 2 }}
            onClose={() => setSuccess(false)}
          >
            Your message has been sent successfully!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "grid", gap: 3 }}>
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              inputProps={{ "aria-label": "Name" }}
            />

            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              inputProps={{ "aria-label": "Email" }}
            />

            <FormControl>
              <FormLabel>Priority Level</FormLabel>
              <RadioGroup
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                {priorities.map((priority) => (
                  <Tooltip
                    key={priority.value}
                    title={`${priority.description} - Estimated Response: ${priority.time}`}
                    arrow
                  >
                    <FormControlLabel
                      value={priority.value}
                      control={<Radio />}
                      label={priority.label}
                    />
                  </Tooltip>
                ))}
              </RadioGroup>
            </FormControl>

            <TextField
              select
              required
              fullWidth
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              error={!!errors.department}
              helperText={errors.department}
            >
              {departments.map((dept) => (
                <MenuItem key={dept.value} value={dept.value}>
                  {dept.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              inputProps={{ maxLength: 100 }}
            />

            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={`${errors.message || ""} (${formData.message.length}/500 characters)`}
              inputProps={{ maxLength: 500 }}
            />

            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
              <Button
                type="button"
                variant="outlined"
                onClick={resetForm}
                disabled={loading}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : <FaCheckCircle />}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Box>
          </Box>
        </form>
      </CardContent>
    </StyledCard>
  );
};

export default ContactForm;