// PM VIKAS IoT Assistant Internship — IIIT Kottayam
// This seed log pre-populates the calendar the first time it is read.
// After that, the live data in Vercel KV takes over and can be edited
// from the Admin panel.

export const programInfo = {
  title: "IoT Assistant Internship",
  program: "PM VIKAS Program",
  host: "Indian Institute of Information Technology, Kottayam (IIIT-Kottayam)",
  mode: "Offline, on-campus internship with stipend",
  duration: "1.5 months (Jun 2026 – Aug 2026, ongoing)",
  domain: "Internet of Things (IoT) & Embedded Systems",
  objective:
    "To build foundational and applied skills in electronics, networking, and embedded programming, progressing from core theory to hands-on IoT hardware projects and a cloud-connected capstone build.",
  modules: [
    {
      name: "Electronics",
      detail: "Passive components, breadboard wiring, circuit design fundamentals, and hardware measurement with GPIOs and a multimeter."
    },
    {
      name: "Networking",
      detail: "Device-to-cloud architectures, Wi-Fi station connections, IP addressing, and TCP client/server communication models."
    },
    {
      name: "Arduino Programming",
      detail: "Arduino IDE setup, Arduino Uno and ESP32 board architectures, C-based firmware, and GPIO control routines."
    },
    {
      name: "Hands-on IoT Projects",
      detail: "Sensor interfacing (LDR, DHT11), real-time cloud telemetry via Blynk, ThingSpeak data logging, and a Smart Home capstone build."
    }
  ]
};

// Each entry becomes one calendar day. Dates use ISO format (YYYY-MM-DD).
export const seedLog = [
  {
    date: "2026-06-19",
    day: 1,
    title: "Introduction to IoT & Ecosystem",
    description:
      "Inauguration of the PM-VIKAS IoT assistant training program. Introduced to IoT nodes, device-to-cloud architectures, real-world smart systems (cities, grid networks), and communication layers.",
    module: "Networking"
  },
  {
    date: "2026-06-20",
    day: 2,
    title: "Microcontroller Architectures & IDE",
    description:
      "Study of Arduino Uno and ESP32 board layouts. Installation of Arduino IDE software, configuring port selections, writing basic C script routines, and flashing standard status LED programs.",
    module: "Arduino Programming"
  },
  {
    date: "2026-06-22",
    day: 3,
    title: "Basic Electronic Components",
    description:
      "Detailed analysis of electronic devices including Resistors, Capacitors, and Light Emitting Diodes (LEDs). Practical hands-on breadboard wiring configurations and simple circuit design rules.",
    module: "Electronics"
  },
  {
    date: "2026-06-23",
    day: 4,
    title: "Hardware Measurement & GPIOs",
    description:
      "Configuring and testing digital/analog General Purpose Input/Output (GPIO) pins. Measuring voltage, loop currents, and resistance values across wired test circuits using a digital multimeter.",
    module: "Electronics"
  },
  {
    date: "2026-06-24",
    day: 5,
    title: "Interfacing LDR (Light Sensors)",
    description:
      "Interfacing Light Dependent Resistors (LDR) to read changing analog light intensity levels. Programmed thresholds to trigger output alerts based on ambient illumination changes.",
    module: "Hands-on IoT Projects"
  },
  {
    date: "2026-06-25",
    day: 6,
    title: "Interfacing DHT11 Temperature Sensor",
    description:
      "Interfacing the DHT11 sensor to monitor environmental temperature and humidity levels. Written data validation logic to filter out noise fluctuations and format values for transmission.",
    module: "Hands-on IoT Projects"
  },
  {
    date: "2026-06-26",
    day: 7,
    title: "ESP32 WiFi & Network Protocols",
    description:
      "Setting up the ESP32 microcontroller's Wi-Fi module. Establishing station (STA) connections to local networks and checking communication protocols (IP addressing, TCP client/server models).",
    module: "Networking"
  },
  {
    date: "2026-06-27",
    day: 8,
    title: "Blynk IoT Cloud Setup & Auth",
    description:
      "Created developer accounts on Blynk IoT Cloud. Set up device templates, virtual datastreams, and generated secure Authentication Tokens. Configured basic mobile application dashboards.",
    module: "Networking"
  },
  {
    date: "2026-06-29",
    day: 9,
    title: "Real-time Cloud Telemetry (Blynk)",
    description:
      "Programmed the ESP32 to upload environmental parameters (LDR intensity and DHT11 values) to the Blynk Cloud dashboard in real-time. Verified low-latency response and remote app widgets.",
    module: "Hands-on IoT Projects"
  },
  {
    date: "2026-06-30",
    day: 10,
    title: "ThingSpeak Logger & Capstone",
    description:
      "Linked the ESP32 to the ThingSpeak server for long-term data logging and visualization. Assembled the final Capstone Project: an integrated Smart Home System that tracks sensors and controls output relays.",
    module: "Hands-on IoT Projects"
  }
];
