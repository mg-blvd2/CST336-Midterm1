Misael Guijarro
guij9043
4 March 2020
Midterm 1

Question 1:
a. We can use inline statements, embedded css in the html file, and an external css file.
   For precedence, inline is above embedded, and embedded is above external. External
   has the lowest precedence.

b. Padding is the distance between the content and the border. Margin is the distance
   outside of the border between elements in our page.

Question #2:
a. "!=" just compares the values of the variables. For example, 1 != "1" would return
   false since the values themselves are the same. "!==" compares the value and the
   data types of the variables. Returning to our example, 1 !== "1" would return
   true. Although the values are the same, the data types are different. One is a
   string and the other is an integer.

b. false

Question 3:
console:
  [1, 2]
  [1, 2]

Question 4:
document
    |
    ---html
        |
        ---HEAD
        |     |
        |     ---Title
        |          |
        |          ---My page
        |
        ---body
            |
            ---img
            |    |
            |    ---width
            |    |     |
            |    |     ---100px
            |    |
            |    ---height
            |    |     |
            |    |     ---100px
            |    |
            |    ---src
            |        |
            |        ---myimage.jpg
            |
            |
            ---p
               |
               ---span
               |   |
               |   ---My name
               |
               ---and My Info
