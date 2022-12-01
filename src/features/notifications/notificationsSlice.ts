import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Notification {
  message: string;
  type: string;
  id: string;
}

export interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification(
      state,
      action: PayloadAction<{ type: string; message: string }>
    ) {
      const id = new Date().getTime().toString();

      /* Sposób 1
        const notification: Notification = {
            id: id,
            type: action.payload.type,
            message: action.payload.message
        }
     */

      /* Sposób 2
        const { type, message } = action.payload;
        const notification: Notification = {
            id,
            type,
            message
        }
     */

      // { ...action.paload } => kopiuje obiekt => { message: 'Hej', type: 'succes' }
      const notification: Notification = {
        ...action.payload,
        id,
      };

      // Dodawanie elementu do tablicy: Sposób 1
      // state.items.push(notification);

      // Kopiowanie tablicy i dodanie nowego elementu na koniec
      state.notifications = [...state.notifications, notification];
    },
    removeNotification(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== id
      );
    },
  },
});

export const notificationsReducer = notificationsSlice.reducer;

export const { addNotification, removeNotification } =
  notificationsSlice.actions;

export const selectNotifications = (state: RootState) =>
  state.notifications.notifications;
