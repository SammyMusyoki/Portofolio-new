interface Questions {
    id: number;
    name: string;
    questionText: string;
    answer: string;
    placeholder: string;
};

interface MessageContextValue {
    message: string;
    type: 'success' | 'error' | 'warning' | null;
    showMessage: (msg: string, type: "success" | "error" | "warning") => void;
    clearMessage: () => void;
}

export type {
    Questions,
    MessageContextValue,
}