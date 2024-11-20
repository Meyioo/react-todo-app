import React from "react";

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  selected: boolean;
}

const DUMMY_TODOS: Todo[] = [
  {
    id: 1,
    title: "Einkaufen gehen",
    description: "Milch, Eier, Brot und Gemüse kaufen",
    completed: false,
    selected: false,
  },
  {
    id: 2,
    title: "Bachelorarbeit schreiben",
    description: "Kapitel über Svelte-Framework fertigstellen",
    completed: false,
    selected: false,
  },
  {
    id: 3,

    title: "Fitnessstudio besuchen",
    description: "1 Stunde Ausdauer und Krafttraining",
    completed: false,
    selected: false,
  },

  {
    id: 4,
    title: "Einkaufen gehen",
    description: "Lebensmittel und Haushaltswaren besorgen",
    completed: false,
    selected: false,
  },
  {
    id: 5,
    title: "Arzttermin wahrnehmen",
    description: "Jährliche Gesundheitsuntersuchung",
    completed: false,
    selected: false,
  },
  {
    id: 6,
    title: "E-Mails bearbeiten",
    description: "Alle wichtigen E-Mails durchgehen und beantworten",
    completed: false,
    selected: false,
  },
  {
    id: 7,
    title: "Projektbericht schreiben",
    description: "Fortschrittsbericht für das aktuelle Projekt erstellen",
    completed: false,
    selected: false,
  },
  {
    id: 8,
    title: "Wohnung putzen",
    description: "Staubsaugen und Oberflächen abwischen",
    completed: false,
    selected: false,
  },
  {
    id: 9,
    title: "Freunde treffen",
    description: "Treffen zum Abendessen vereinbaren",
    completed: false,
    selected: false,
  },
  {
    id: 10,
    title: "Rechnung bezahlen",
    description: "Telefon- und Internetrechnung begleichen",
    completed: false,
    selected: false,
  },
  {
    id: 11,
    title: "Buch lesen",
    description: "Kapitel 4 des aktuellen Buches durchlesen",
    completed: false,
    selected: false,
  },
  {
    id: 12,
    title: "Joggen gehen",
    description: "30 Minuten joggen im Park",
    completed: false,
    selected: false,
  },
  {
    id: 13,
    title: "Familie anrufen",
    description: "Kurzes Gespräch mit den Eltern führen",
    completed: false,
    selected: false,
  },
];

export interface AppState {
  todos?: Todo[];
  updateState: (newState: Partial<AppState>) => void;
}

const defaultState: AppState = {
  todos: DUMMY_TODOS,
  updateState: (newState?: Partial<AppState>) => {},
};

export const TodosContext = React.createContext<AppState>(defaultState);
