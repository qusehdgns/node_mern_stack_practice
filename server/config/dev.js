let db_id = "node_mern_stack_practice";
let db_pw = "1234";
let db_name = "node_mern_stack_practice";

module.exports ={
    mongoURI: `mongodb://${db_id}:${db_pw}@localhost:27017/${db_name}`
}