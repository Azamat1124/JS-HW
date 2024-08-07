// ! задача - 1
// const posts = {
//   name: "posts",
//   isloading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allids: ["post1", "post2"],
// };
// const copyOFPosts = { ...posts };
// console.log(copyOFPosts);

// ! задача -2

// const posts2 = {
//     name: "posts",
//     isloading: true,
//     byId: {
//       post1: {
//         id: "post1",
//         author: "user1",
//         body: "......",
//         comments: ["comment1", "comment2"],
//       },
//       post2: {
//         id: "post2",
//         author: "user2",
//         body: "......",
//         comments: ["comment3", "comment4", "comment5"],
//       },
//     },
//     allids: ["post1", "post2"],
//   };
//   const copyOFPosts2 = JSON.parse(JSON.stringify(posts2));
//   console.log(copyOFPosts2);
// ? экинчи туру вопросуна тушунбодум
//   const copy = {...posts2};
//   console.log(copy);

//! задача - 3
// const post3 = {
//   name: "posts",
//   isloading: true,
//   id: "post1",
//   author: "user1",
//   body: "......",
//   comments: ["comment1", "comment2"],
// };
// const { comments: color, hello, ...rest } = post3;
//! console.log(color); color бизде (Array) дын ичиндегилерге барабар себеби биз
//! жаны переменныйды ачканда ошого post3 тун ичиндеги comments ключун
//! чакырып алганыбызгы байланыштуу color ошого барабар болуп калды

//? console.log(hello); hello бизде undefined га барабар себеп hello post3 ичиндеги бир да ключко туура келбейт

//* console.log(rest); rest бизде post3 ко барабар себеби rest бул 3 ... точка оператору бул аягына
// *жазылганына байланыштуу post3 Object ти кочуруп келет

// ! задача -4
const comments = ["comments3", "comments4", "comments5", "comments1"];
const [comment1, ...rest] = comments;
// ! console.log(comment1); бул бизде comments3 ко барабар себеби алдынан чыккан биринчи элементти гана окуйт
// console.log(rest);