import {MCQuestion, MCQuizDTO} from '../shared/lean-learn-api';

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

export const mockMcQuiz: MCQuizDTO = {
  questions: [
    {
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
    },
    {
      question: "(Question 2) You are developing a Spring application that requires a method to update user information in a database. " +
        "You have created a repository interface that extends `CrudRepository`. To ensure the method correctly updates user" +
        " records, what annotation must you include on the method that performs this operation?",
      possibleAnswers: [
        "(Question 2) @Query",
        "@Transactional",
        "@Modifying",
        "@PersistenceContext"
      ],
      correctAnswerIndex: 2,
      explanation: "The `@Modifying` annotation is necessary for any method that performs data-changing operations, such as" +
        " INSERT, UPDATE, or DELETE. Without this annotation, Spring Data would not recognize the method's intent to modify" +
        " data, which could lead to unexpected behavior or failures in your application."
    },
    {
      question: "(Question 3) You are developing a Spring application that requires a method to update user information in a database. " +
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
    },
    {
      question: "(Question 4) You are developing a Spring application that requires a method to update user information in a database. " +
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
  ]
}

export const mockCodingExercise = {
  exerciseDescription: "You are tasked with creating a simple application that manages a list of books in a library. " +
    "Each book has an ID, title, author, and publication year. Using Spring Data, create a repository interface for the " +
    "Book entity that extends the CrudRepository. Your repository should include a custom method to find books by the " +
    "author's name and another method to delete books published before a certain year. Make sure to use the @Query " +
    "annotation for the custom methods and the @Modifying annotation for the delete operation. Additionally, provide " +
    "code to test the repository functionalities in a main application class.",
  initialCode: `import org.springframework.data.repository.CrudRepository;\n
import org.springframework.data.jpa.repository.Modifying;\n
import org.springframework.data.jpa.repository.Query;\n
import org.springframework.stereotype.Repository;\n\n
@Repository\npublic interface BookRepository extends CrudRepository<Book, Long> {\n\n
  @Query(\"SELECT b FROM Book b WHERE b.author = ?1\")\n
  List<Book> findByAuthor(String author);\n\n
  @Modifying\n  @Query(\"DELETE FROM Book b WHERE b.publicationYear < ?1\")\n
  void deleteBooksPublishedBefore(int year);\n}
  `
}
