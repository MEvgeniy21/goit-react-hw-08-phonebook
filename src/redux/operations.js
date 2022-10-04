import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://63385ecf937ea77bfdbf0d7e.mockapi.io/api/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, phone });
      toast.success(`contact - "${name}: ${phone}" has been added`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactsId}`);
      const { name, phone } = res.data;
      toast.success(`contact - "${name}: ${phone}" has been deleted`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, phone }, thunkAPI) => {
    try {
      const res = await axios.put(`/contacts/${id}`, {
        name,
        phone,
      });
      toast.success(`contact - "${name}: ${phone}" has been edited`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
