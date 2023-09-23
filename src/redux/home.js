// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import ReactTimeAgo from 'react-time-ago';

const formatData = (data) => {
    const jsonData = data.map((item) => {
      return { ...item, meta: `Sent by ${item?.user?.first_name}`, timeAgo: <ReactTimeAgo date={new Date(item.created)} />, title: item.title, content: item.details, color: '' }
    })
    return jsonData;
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    announcements: [],
    announcementModal: {
        isOpen: false,
    },
    projects: []
  },
  reducers: {
    setAnnouncements: (state, action) => {
        state.announcements = formatData(action.payload);
    },
    setAnnouncementModalState: (state, action) => {
        state.announcementModal = action.payload;
    },
    setProjects: (state, action) => {
        state.projects = action.payload;
    },
  }
})

export const {
    announcements,
    announcementModal,
    projects
} = homeSlice.actions

export default homeSlice.reducer
