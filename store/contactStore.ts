import { create } from "zustand";

type Status = "idle" | "loading" | "success" | "error";

interface ContactForm {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

interface ContactStore {
  form:      ContactForm;
  status:    Status;
  setField:  (field: keyof ContactForm, value: string) => void;
  setStatus: (status: Status) => void;
  resetForm: () => void;
}

const initialForm: ContactForm = {
  name:    "",
  email:   "",
  subject: "",
  message: "",
};

export const useContactStore = create<ContactStore>((set) => ({
  form:      initialForm,
  status:    "idle",

  setField: (field, value) =>
    set((state) => ({ form: { ...state.form, [field]: value } })),

  setStatus: (status) => set({ status }),

  resetForm: () => set({ form: initialForm }),
}));