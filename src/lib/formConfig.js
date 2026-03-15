import { plan, price } from "./pricing";

export const loginFormControl = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const signinFormControl = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    componentType: "input",
    type: "number",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
  // {
  //   name: "cPassword",
  //   label: "Confirm Password",
  //   placeholder: "confirm your password",
  //   componentType: "input",
  //   type: "password",
  // },
];

export const contactForm = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your First name",
    componentType: "input",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your Last name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    componentType: "input",
    type: "number",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    componentType: "textarea",
    type: "text",
  },
];

export const buyAirtimeForm = [
  {
    name: "network",
    label: "Select Network Name",
    componentType: "select",
    options: [
      { id: "mtn", label: "MTN" },
      { id: "airtel", label: "Airtel" },
      { id: "glo", label: "Glo" },
      { id: "9mobile", label: "9mobile" },
    ],
  },
  {
    name: "type",
    label: "Airtime Type ",
    componentType: "select",
    options: [
      { id: "vtu", label: "VTU" },
      { id: "sme", label: "SME" },
      { id: "corporate", label: "Corporate" },
    ],
  },

  {
    name: "number",
    label: "Phone Number",
    placeholder: "Enter phone number",
    componentType: "input",
    type: "number",
  },
  {
    name: "amount",
    label: "Amount ",
    placeholder: "Enter amount",
    componentType: "input",
    type: "number",
  },
];

export const buyTvForm = [
  {
    name: "type",
    label: "Select Cable Type",
    componentType: "select",
    options: [
      { id: "gotv", label: "GOTV" },
      { id: "dstv", label: "DSTV" },
      { id: "startimes", label: "STARTIMES" },
    ],
  },
  {
    name: "number",
    label: "Decoder Number",
    placeholder: "Enter Decoder number",
    componentType: "input",
    type: "number",
  },
];

export const buyDataForm = [
  {
    name: "network",
    label: "Select Network Name",
    componentType: "select",
    options: [
      { id: "mtn", label: "MTN" },
      { id: "airtel", label: "Airtel" },
      { id: "glo", label: "Glo" },
      { id: "9mobile", label: "9mobile" },
    ],
  },
  {
    name: "type",
    label: "Data Plan ",
    componentType: "select",
    options: plan,
  },

  {
    name: "number",
    label: "Phone Number",
    placeholder: "Enter phone number",
    componentType: "input",
    type: "number",
  },
  {
    name: "amount",
    label: "Amount ",
    placeholder: "Enter amount",
    componentType: "input",
    type: "number",
  },
];

export const buyElectricityForm = [
  {
    name: "meterType",
    label: "Choose Meter Type",
    componentType: "select",
    options: [
      { id: "prepaid", label: "Prepaid" },
      { id: "postpaid", label: "Postpaid" },
    ],
  },
  {
    name: "type",
    label: "Service Type  ",
    componentType: "select",
    options: [
      { id: "abuja", label: "Abuja Electricity" },
      { id: "benin", label: "Benin Electricity" },
      { id: "enugu", label: "Enugu Electricity" },
      { id: "eko", label: "Eko Electricity" },
      { id: "ibadan", label: "Ibadan Electricity" },
      { id: "ikeja", label: "Ikeja Electricity" },
      { id: "jos", label: "Jos Electricity" },
      { id: "kaduna", label: "Kaduna Electricity" },
      { id: "kano", label: "Kano Electricity" },
    ],
  },

  {
    name: "number",
    label: "Meter Number",
    placeholder: "Enter Meter number",
    componentType: "input",
    type: "number",
  },
];

export const amountForm = [
  {
    name: "amount",
    label: "Amount ",
    placeholder: "Enter amount",
    componentType: "input",
    type: "number",
  },
];
