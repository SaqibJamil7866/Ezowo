import Services from "./service"

// const getFeaturedProducts = async (limit) => {
//   try {
//     // let response = await Services.getData('getfeaturedproducts', { 'limit' : limit })
//     let response = await Services.getData("getfeaturedproducts");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getSaleProducts = async (limit) => {
//   try {
//     // let response = await Services.getData('getsaleproducts', { 'limit' : limit })
//     let response = await Services.getData("getsaleproducts");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getRelatedProducts = async (p_id) => {
//   try {
//     let response = await Services.getData(
//       "getprimarycategoryproductsbyproductid",
//       { p_id: p_id }
//     );
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getAllCategories = async () => {
//   try {
//     let response = await Services.getData("getallcategories");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getAllPages = async () => {
//   try {
//     let response = await Services.getData("getallinformationpages");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getCategoryProducts = async (categoryId) => {
//   const queryData = { c_id: categoryId };
//   try {
//     let response = await Services.getData("getproductsbycategory", queryData);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const searchCategoryProducts = async (categoryId, keyword) => {
//   const queryData = { c_id: categoryId, keyword: keyword };
//   try {
//     let response = await Services.getData("searchproduct", queryData);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getProductById = async (productId) => {
//   const queryData = { p_id: productId };
//   try {
//     let response = await Services.getData("getproduct", queryData);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getOrderById = async (orderId) => {
//   const queryData = { o_id: orderId };
//   try {
//     let response = await Services.getDataWithToken("getorderbyid", queryData);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getCategoryInformationById = async (id) => {
//   const queryData = { c_id: id };
//   try {
//     let response = await Services.getData("getcategorybyid", queryData);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateProfile = async (data) => {
//   try {
//     let response = await Services.postData("userupdate", data);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const saveProductReview = async (data) => {
//   try {
//     let response = await Services.postData("savereview", data);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

const processLogin = async (email, password) => {
  const queryData = { email, password }
  try {
    const response = await Services.postDataWithoutToken("users/login", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const processDemo = async (data) => {
  const queryData = data
  try {
    const response = await Services.postDataWithoutToken("accounts/signup_demo", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const processSignup = async (data) => {
  const queryData = data
  try {
    const response = await Services.postDataWithoutToken("accounts/signup", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

// const checkEmailExists = async (email) => {
//   try {
//     let response = await Services.getData("checkuseremail", { email: email });
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const processSignupApi = async (signupObject) => {
//   try {
//     let response = await Services.postDataWithoutToken(
//       "registration",
//       signupObject
//     );
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getAllOrders = async () => {
//   try {
//     let response = await Services.getDataWithToken("getallorders");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const generateDownloadLinkByInvoice = async (data) => {
//   try {
//     let response = await Services.getDataWithToken(
//       "generatedownloadlinkbyinvoice",
//       data
//     );
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const generateOrder = async (orderObject) => {
//   try {
//     let response = await Services.postData("saveorder", orderObject);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const logout = async () => {
//   try {
//     let response = await Services.getDataWithToken("logout");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const resetPasswordRequest = async email => {
//   const queryData = { 'email': email }
//   try {
//     let response = await Services.postDataWithoutToken('forgotpassword', queryData)
//     return await response.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// const resetPassword = async (hash, password, confirm_password) => {
//   const queryData = {
//     hash,
//     password,
//     confirm_password
//   }
//   try {
//     let response = await Services.postDataWithoutToken('resetpassword?id='+hash, queryData)
//     return await response.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

const getAllProjects = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("projects", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllUsers = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("users", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllCalendarTasks = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("calendar", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const addProject = async (data) => {
  try {
    const response = await Services.postData("projects/add", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteRow = async (url, data) => {
  try {
    const response = await Services.postData(url, data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllRoles = async () => {
  const queryData = {}
  try {
    const response = await Services.getData("utilities/meta/roles", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const addUser = async (data) => {
  try {
    const response = await Services.postData("users/add", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllDashboardTasks = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("tasks", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllProjectTasks = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("tasks", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllTaskTypes = async () => {
  try {
    const response = await Services.getData("utilities/meta/task_type", {})
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllTaskPriorities = async () => {
  try {
    const response = await Services.getData("utilities/meta/task_priority", {})
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAllTaskStatus = async () => {
  try {
    const response = await Services.getData("utilities/meta/task_status", {})
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const addTask = async (data) => {
  try {
    const response = await Services.postData("tasks/add", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getProjectSummary = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("projects/view", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getProjectTeamTaskStatus = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("tasks/count_by_user_by_status", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getProjectTasksCountByStatus = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("tasks/count_by_status", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getProjectActivities = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("activities", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getAnnouncements = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("project-announcements", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const saveAnnouncement = async (data) => {
  try {
    const response = await Services.postData("project-announcements/add", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteAnnouncement = async (data) => {
  try {
    const response = await Services.postData("project-announcements/delete", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getTaskDetail = async (params) => {
  const queryData = params
  try {
    const response = await Services.getData("tasks", queryData)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const saveTaskComment = async (data) => {
  try {
    const response = await Services.postData("tasks/add_comment", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteTaskComment = async (data) => {
  try {
    const response = await Services.postData("tasks/delete_comment", data)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  processSignup,
  processDemo,
  processLogin,
  // processSignupApi,
  // updateProfile,
  // getAllOrders,
  // generateOrder,
  // getOrderById,
  // logout,
  // generateDownloadLinkByInvoice,
  // saveProductReview,
  // getCategoryInformationById,
  // checkEmailExists,
  // resetPasswordRequest,
  // resetPassword
  getAllProjects,
  getAllCalendarTasks,
  getAllUsers,
  addProject,
  deleteRow,
  getAllRoles,
  addUser,

  getAllProjectTasks,
  getAllDashboardTasks,
  getAllTaskTypes,
  getAllTaskPriorities,
  getAllTaskStatus,
  addTask,

  getProjectSummary,
  getProjectTeamTaskStatus,
  getProjectTasksCountByStatus,
  getProjectActivities,

  getAnnouncements,
  saveAnnouncement,
  deleteAnnouncement,

  getTaskDetail,
  saveTaskComment,
  deleteTaskComment
}