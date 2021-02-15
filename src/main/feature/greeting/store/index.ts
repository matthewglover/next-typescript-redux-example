import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UpdateGreeting = {
  name: string;
};

export type Greeting = {
  name: string;
};

const initialState: Greeting = {
  name: 'foe',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    updateName(state: Greeting, { payload }: PayloadAction<UpdateGreeting>) {
      state.name = payload.name;
      return state;
    },
  },
});

export const { updateName } = greetingSlice.actions;

export default greetingSlice.reducer;
