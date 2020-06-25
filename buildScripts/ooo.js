function deepCopy(obj) {
  let copy = {};
  let data, key; 
  for (let kv of Object.entries(obj)) {
    if (typeof kv[1] === "object") {
      data = deepCopy(kv[1]);
    }
    else {
      data = kv[1];
    }
    key = kv[0];
    copy[key] = data;
  }
  return copy;
}

function modelStateChange(state, action, data) {
  // let newState = { ...state };
  const newState = deepCopy(state);
  let createdAt = new Date();
  let completed = data.completed || false;
  let id = data.id;
  let title = data.title;
  let description = data.description;
  let updatedAt = new Date();
  
  if (action === "CREATE") {
    let newTodo = {
      createdAt: createdAt,
      updatedAt: updatedAt,
      completed: completed,
      title: title,
      description: description
    }
    newState[id]= newTodo;
  }
  if (action === "REMOVE") {
    if (id in state) {
      delete newState[data.id];

    }
    else {

      return;
    }
  }

  if (action === "MODIFY") {
    if (id in state) {
      newState[id].title = title;
      newState[id].description = description;
      newState[id].completed = completed;
      newState[id].updatedAt = updatedAt;

    } 
    else {
      return;
    }
  }
  return newState;
}
let mynewtodo = modelStateChange([] ,"CREATE", {id: "hello", title: "sameh", description: "boo"})
let mynewtodo2 = modelStateChange(mynewtodo ,"MODIFY", {id: "hello", title: "sameh", description: "goo", completed: true})
mynewtodo2;
