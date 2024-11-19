import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";

export const CATEGORY_LABELS = {
  HOUSING: "Casa",
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  SALARY: "Salário",
  SUBSCRIPTION: "Assinatura",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
  OTHER: "Outros",
};

export const PAYMENT_METHOD_LABELS = {
  PIX: "Pix",
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  CASH: "Dinheiro",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto",
  OTHER: "Outro",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
  {
    value: TransactionType.LOAN,
    label: "Empréstimo",
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    value: PaymentMethod.PIX,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.PIX],
  },
  {
    value: PaymentMethod.CASH,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.CASH],
  },
  {
    value: PaymentMethod.CREDIT_CARD,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.CREDIT_CARD],
  },
  {
    value: PaymentMethod.DEBIT_CARD,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.DEBIT_CARD],
  },
  {
    value: PaymentMethod.BANK_TRANSFER,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.BANK_TRANSFER],
  },
  {
    value: PaymentMethod.BANK_SLIP,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.BANK_SLIP],
  },
  {
    value: PaymentMethod.OTHER,
    label: PAYMENT_METHOD_LABELS[PaymentMethod.OTHER],
  },
];

export const CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.SUBSCRIPTION,
    label: CATEGORY_LABELS[TransactionCategory.SUBSCRIPTION],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
];

export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
