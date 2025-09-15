import {MCQuestion} from '../../shared/lean-learn-api';

export const mockMcQuestion: MCQuestion = {
  question: "You are developing a Spring application that requires a method to update user information in a database. " +
    "You have created a repository interface that extends `CrudRepository`. To ensure the method correctly updates user" +
    " records, what annotation must you include on the method that performs this operation?",
  possibleAnswers: [
    "@Query",
    "@Transactional",
    "@Modifying",
    "@PersistenceContext"
  ],
  correctAnswerIndex: 2,
  explanation: "The `@Modifying` annotation is necessary for any method that performs data-changing operations, such as" +
    " INSERT, UPDATE, or DELETE. Without this annotation, Spring Data would not recognize the method's intent to modify" +
    " data, which could lead to unexpected behavior or failures in your application."
}
