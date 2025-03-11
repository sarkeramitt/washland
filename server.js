// Standalone Express server for handling API requests
import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Create a transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API endpoint for contact form
app.post("/api/contact", async (req, res) => {
  console.log("Received contact form submission:", req.body)

  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      console.log("Missing required fields")
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      })
    }

    // Email content
    const mailOptions = {
      from: 'amitaff14@gmail.com', // sender address
      to: 'amitaff14@gmail.com', // list of receivers
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    

    // Always return a proper JSON response
    return res.status(200).json({
      success: true,
      message: "Message received successfully!",
    })
  } catch (error) {
    console.error("Server error processing form:", error)

    // Always return a proper JSON response even for errors
    return res.status(500).json({
      success: false,
      message: `Failed to process form: ${error.message}`,
    })
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack)
  res.status(500).json({
    success: false,
    message: "Internal server error",
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})