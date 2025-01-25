export const initialState = [];

const medicationsReducer = (medications, action) => {
    switch (action.type) {
        case 'ADD_TITLE':
            return [
                ...medications,
                {
                    id: Date.now(),
                    value: medications.length,
                    title: action.title,
                    dosage: [],
                },
            ];
        case 'EDIT_TITLE':
            return medications.map((medication) =>
                medication.id === action.id ? { ...medication, title: action.title } : medication
            );
        case 'CANCEL_EDIT_TITLE':
            return medications; // No state change needed for canceling edit
        case 'DELETE_TITLE':
            return medications.filter((medication) => medication.id !== action.id);
        case 'CANCEL_DELETE_TITLE':
            return medications; // No state change needed for canceling delete
        case 'ADD_DOSAGE':
            const today = new Date();
            const formattedTime = today.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            const formattedYear = today.getFullYear();
            const formattedMonth = today.getMonth() + 1; // Months are zero-based
            const formattedDate = today.getDate();

            return medications.map((medication) =>
                medication.id === action.id
                    ? {
                          ...medication,
                          dosage: [
                              ...medication.dosage,
                              {
                                  id: new Date().getTime(),
                                  amount: action.dosage,
                                  time: new Date().toISOString(),
                                  currentTime: formattedTime,
                                  date: formattedDate,
                                  month: formattedMonth,
                                  year: formattedYear,
                              },
                          ],
                      }
                    : medication
            );
        case 'DELETE_DOSAGE':
            return medications.map((medication) =>
                medication.id === action.medicationId
                    ? {
                          ...medication,
                          dosage: medication.dosage.filter((dose) => dose.id !== action.dosageId),
                      }
                    : medication
            );
        case 'CANCEL_DELETE_DOSAGE':
            return medications; // No state change needed for canceling delete dosage
        default:
            return medications;
    }
};

export default medicationsReducer;