const unit1 = [
  {
    "id": 5629617,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 1,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>What command will be used to print output in a new line?</span>",
    "answers": [
      {
        "id": 8325,
        "text": "print()"
      },
      {
        "id": 6661,
        "text": "printline()"
      },
      {
        "id": 20191,
        "text": "println()"
      },
      {
        "id": 98435,
        "text": "printf()"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "20191",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "println() is a command which is used to print output in a new line. The print() function prints the output in the same line.",
    "neutral_comments_html": "<p><span>println() is a command which is used to print output in a new line. The print() function prints the </span></p>\n<p><span>output in the same line.</span></p>",
    "correct_answer": 20191
  },
  {
    "id": 5629618,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 2,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p>Statement 1 - Keywords also known as reserved words.</p>\n<p>Statement 2 - They cannot be used for naming variables in java.</p>\n<p>Which of the above is true?</p>\n",
    "answers": [
      {
        "id": 68346,
        "text": "Statement 1 only"
      },
      {
        "id": 95692,
        "text": "Statement 2 only"
      },
      {
        "id": 7940,
        "text": "Both 1 & 2"
      },
      {
        "id": 88860,
        "text": "Neither 1 & 2"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "7940",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Keywords are reserved words that have special meaning. They can't be used for naming in java.",
    "correct_answer": 7940
  },
  {
    "id": 5629619,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 3,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "Which of the following is largest in size?",
    "answers": [
      {
        "id": 31738,
        "text": "Double"
      },
      {
        "id": 99645,
        "text": "short"
      },
      {
        "id": 47613,
        "text": "int"
      },
      {
        "id": 41643,
        "text": "long"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "31738",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Hierarchy of the data types from largest in size to smallest is: double float long int short",
    "neutral_comments_html": "<p>Hierarchy of the data types from largest in size to smallest is:</p>\n<p>double</p>\n<p>float</p>\n<p>long</p>\n<p>int</p>\n<p>short </p>",
    "correct_answer": 31738
  },
  {
    "id": 5629620,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": 16198632,
    "position": 4,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<ol>\n<li><span>In the following code to print the value of ‘Hello’, 3 times, select the value of ‘n’.</span></li>\n</ol>\n<p><span>class Example {</span></p>\n<p><span>  public static void main(String[ ] args) {</span></p>\n<p><span>    int n =____; </span></p>\n<p><span>    for (int i = 1; i &lt;= n; i = i * 2) {</span></p>\n<p><span>      System.out.println(\"Hello\");</span></p>\n<p><span>    }</span></p>\n<p><span>  }</span></p>\n<p><span>}</span></p>\n",
    "answers": [
      {
        "id": 46901,
        "text": "0"
      },
      {
        "id": 93547,
        "text": "4"
      },
      {
        "id": 76335,
        "text": "1"
      },
      {
        "id": 12012,
        "text": "2"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "93547",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "At every step, the value of i is getting doubled. Initial value of i is 1 = 2 ^ 0, so for the loop to run 3 times, n should be equal to 2 ^ 2 = 4.",
    "correct_answer": 93547
  },
  {
    "id": 5629621,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": 16198633,
    "position": 5,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<ol>\n<li><span>How many times is 'Hello' printed in the following code:</span></li>\n</ol>\n<p><span>public class Example {</span></p>\n<p><span>public static void main(String[ ] args){</span></p>\n<p><span> for(int i = 0; i&lt;3; i++)</span></p>\n<p><span> {</span></p>\n<p><span> System.out.println(\"Hello\");</span></p>\n<p><span> break;</span></p>\n<p><span> }</span></p>\n<p><span>}</span></p>\n<p><span>}</span></p>\n",
    "answers": [
      {
        "id": 26087,
        "text": "3"
      },
      {
        "id": 64065,
        "text": "0"
      },
      {
        "id": 4054,
        "text": "1"
      },
      {
        "id": 64918,
        "text": "4"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "4054",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Initially it seems that hello is printed 3 times, ’Hello’ is printed once in the above code because of the ‘break’ keyword that is used after the first iteration and once it is met, the loop automatically terminates.",
    "correct_answer": 4054
  },
  {
    "id": 5629622,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 6,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p> </p>\n<p>Which of the following is not a valid variable name?</p>\n",
    "answers": [
      {
        "id": 6437,
        "text": "1first"
      },
      {
        "id": 17671,
        "text": "first_1"
      },
      {
        "id": 42802,
        "text": "first@1"
      },
      {
        "id": 73130,
        "text": "_first1"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": false,
    "points_possible": 1,
    "points": 0,
    "answer": "42802",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Variables in java cannot start with an underscore. Hence, 1first is not a valid variable name.",
    "correct_answer": 6437
  },
  {
    "id": 5629623,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 7,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "Which of the following is incorrect with respect to the naming convention in Java?",
    "answers": [
      {
        "id": 58192,
        "text": "Must start with letter, underscore or dollar"
      },
      {
        "id": 66446,
        "text": "Whitespaces are allowed"
      },
      {
        "id": 7405,
        "text": "No keywords are allowed"
      },
      {
        "id": 63059,
        "text": "It is case sensitive"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "66446",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "While naming a variable in Java, no whitespaces are allowed. Hence the correct option is option B",
    "correct_answer": 66446
  },
  {
    "id": 5629624,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": 16198636,
    "position": 8,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>Memory allocation in a variable depends on _______.</span>",
    "answers": [
      {
        "id": 88281,
        "text": "type"
      },
      {
        "id": 59038,
        "text": "keyword"
      },
      {
        "id": 18488,
        "text": "value"
      },
      {
        "id": 54309,
        "text": "object"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "88281",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Memory allocation of a variable depends on its ‘type’. For example, a variable of ‘double’ type will take up more memory than a variable of ‘short’ type. A “int’ takes 4 bytes of memory.",
    "correct_answer": 88281
  },
  {
    "id": 5629625,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": 16198637,
    "position": 9,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>For explicit type casting, what piece of code should you write, that would convert b=‘short’ to a=‘double’:</span>",
    "answers": [
      {
        "id": 81308,
        "text": "a=(double)b"
      },
      {
        "id": 37447,
        "text": "b=(double)a"
      },
      {
        "id": 69582,
        "text": "a=(short)b"
      },
      {
        "id": 98001,
        "text": "None of these"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": false,
    "points_possible": 1,
    "points": 0,
    "answer": "81308",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "In explicit type casting, the syntax used would be a=(destination data type)b. Since the data type is being converted to ‘double’, it is not a part of explicit typecasting.",
    "correct_answer": 98001
  },
  {
    "id": 5629626,
    "quiz_id": 1166833,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 10,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>Write the output:</span></p>\n<p><span>for (int i = 0; i &lt; = 10; i++) </span></p>\n<p><span>{</span></p>\n<p><span>  if (i == 10) {</span></p>\n<p><span>    print(i);</span></p>\n<p><span>  }</span></p>\n<p><span>}</span></p>\n",
    "answers": [
      {
        "id": 85101,
        "text": "0 1 2 3 4 5 6 7 8 9"
      },
      {
        "id": 59576,
        "text": "10"
      },
      {
        "id": 65265,
        "text": "1 2 3 4"
      },
      {
        "id": 7963,
        "text": "1 2 3 4 5 5"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "59576",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "The for loops keep iterating till i becomes =10. When the value of i becomes 10, the condition in if statement becomes true. So we print 10.",
    "correct_answer": 59576
  }
];

const unit2 = [
  {
    "id": 5629465,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198639,
    "position": 1,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>In OOPs, _________ enables code reusability.</span>",
    "answers": [
      {
        "id": 29428,
        "text": "Encapsulation"
      },
      {
        "id": 56977,
        "text": "Class name"
      },
      {
        "id": 71787,
        "text": "Inheritance"
      },
      {
        "id": 3965,
        "text": "Abstraction"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "71787",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Inheritance indicates the code reusability in OOPs. Inheritance in Java is a concept that acquires the properties from one class to other classes.",
    "neutral_comments_html": "<span>Inheritance indicates the code reusability in OOPs. </span><span>Inheritance in Java is a concept that acquires the properties from one class to other classes</span><span>.</span>",
    "correct_answer": 71787
  },
  {
    "id": 5629466,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198640,
    "position": 2,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><strong>A) Class allows ease of debugging.</strong></p>\n<p><strong>B) Debugging gets easy due to modularization.</strong></p>\n<p><span>Choose the correct option.</span></p>\n",
    "answers": [
      {
        "id": 29067,
        "text": "Only A is correct"
      },
      {
        "id": 23636,
        "text": "Only B is correct"
      },
      {
        "id": 73923,
        "text": "Both A and B is correct"
      },
      {
        "id": 43086,
        "text": "Both A and B is false"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "73923",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Both the above statements are correct as B is the explanation to A. Modularisation allows simplicity, as rather than focusing on the entire thousands lines of code in one go users can access it in the form of modules, making it easier to debug.",
    "correct_answer": 73923
  },
  {
    "id": 5629467,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198641,
    "position": 3,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>Fill in the blank:</span></p>\n<p><span>This enables the instance creation of class-</span></p>\n<p><span>classname _______ = new classname();</span></p>\n",
    "answers": [
      {
        "id": 22017,
        "text": "class_name"
      },
      {
        "id": 7589,
        "text": "object_name"
      },
      {
        "id": 29895,
        "text": "new"
      },
      {
        "id": 39364,
        "text": "number of objects"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "7589",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "The line of code would be written as: classname objectname = new classname();",
    "neutral_comments_html": "<p><span>The line of code would be written as:</span></p>\n<p><span>classname objectname = new classname();</span></p>",
    "correct_answer": 7589
  },
  {
    "id": 5629468,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198642,
    "position": 4,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>Method overriding is also known as _________ polymorphism.</span>",
    "answers": [
      {
        "id": 36831,
        "text": "compile time"
      },
      {
        "id": 49567,
        "text": "run time"
      },
      {
        "id": 49994,
        "text": "error based"
      },
      {
        "id": 88228,
        "text": "multiple block"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "49567",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Method Overriding is a process in which a function call to the overridden method is resolved at run time.",
    "correct_answer": 49567
  },
  {
    "id": 5629469,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198643,
    "position": 5,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>When there is a method with the exact same signature in both parent and child class, it is known as ________ polymorphism.</span>",
    "answers": [
      {
        "id": 17022,
        "text": "decision time"
      },
      {
        "id": 42589,
        "text": "method overloading"
      },
      {
        "id": 83473,
        "text": "method overriding"
      },
      {
        "id": 62054,
        "text": "operator overloading"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "83473",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Method overriding happens when there are two methods with the same names and signatures (or arguments).",
    "correct_answer": 83473
  },
  {
    "id": 5629470,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 6,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>Choose the correct code to create a class called ‘Flowers’ with attributes ‘name’ and ‘colour’:</span>",
    "answers": [
      {
        "id": 98794,
        "text": "public class Flowers {      String(name):      String(colour);    }",
        "html": "<p><span>public class Flowers {</span></p>\n<p><span>     String(name):</span></p>\n<p><span>     String(colour);</span></p>\n<p><span>   }</span></p>"
      },
      {
        "id": 14996,
        "text": " public class Rose {      String=name:      String=colour:    }",
        "html": "<p><span> public class Rose {</span></p>\n<p><span>     String=name:</span></p>\n<p><span>     String=colour:</span></p>\n<p><span>   }</span></p>"
      },
      {
        "id": 71812,
        "text": "public class Flowers {      String name = \"Rose\";      String colour = new String(\"Red\");    }",
        "html": "<p><span>public class Flowers {</span></p>\n<p><span>     String name = \"Rose\";</span></p>\n<p><span>     String colour = new String(\"Red\");</span></p>\n<p><span>   }</span></p>"
      },
      {
        "id": 10518,
        "text": "public Flowers {      String=name;      String=colour;    }",
        "html": "<p><span>public Flowers {</span></p>\n<p><span>     String=name;</span></p>\n<p><span>     String=colour;</span></p>\n<p><span>   }</span></p>"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "71812",
    "correct_comments": "",
    "incorrect_comments": "",
    "correct_answer": 71812
  },
  {
    "id": 5629471,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198645,
    "position": 7,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>What type of polymorphism is exhibited in this example?</span></p>\n<p><span>class  {</span></p>\n<p><span>public void Color(int x) {</span></p>\n<p><span>}</span></p>\n<p><span>public void Color(int x, int y) {</span></p>\n<p><span>}</span></p>\n<p><span>public void Color(int x, int y, int z) {</span></p>\n<p><span>}</span></p>\n<p><span>}</span></p>\n",
    "answers": [
      {
        "id": 10932,
        "text": "method overloading"
      },
      {
        "id": 44630,
        "text": "method overriding"
      },
      {
        "id": 20719,
        "text": "method underloading"
      },
      {
        "id": 30116,
        "text": "Cannot say"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "10932",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Method with the same name with different number of arguments or same number of arguments with different data types is method overloading in JAVA programming.",
    "correct_answer": 10932
  },
  {
    "id": 5629472,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 8,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>‘Main’ is a _______ member of method.</span>",
    "answers": [
      {
        "id": 46507,
        "text": "binary"
      },
      {
        "id": 72844,
        "text": "static"
      },
      {
        "id": 87529,
        "text": "non-static"
      },
      {
        "id": 10094,
        "text": "non-binary"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "72844",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Java main() method is always static, so that the compiler can call it without the creation of an object or before the creation of an object of the class. In any Java program, the main() method is the starting point from which the compiler starts program execution.",
    "correct_answer": 72844
  },
  {
    "id": 5629473,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198647,
    "position": 9,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>Fill in the blanks with the correct object name:</span></p>\n<p><span>class Animal {</span></p>\n<p><span>}</span></p>\n<p><span>class AnimalDemo</span></p>\n<p><span>public static void main (string[ ] args) {</span></p>\n<p><span>Animal lion = new Animal ();</span></p>\n<p><span>System.out.println(_______);</span></p>\n<p><span>        }</span></p>\n<p><span>}</span></p>\n",
    "answers": [
      {
        "id": 90822,
        "text": "Animal"
      },
      {
        "id": 50591,
        "text": "lion"
      },
      {
        "id": 1256,
        "text": "public"
      },
      {
        "id": 28192,
        "text": "new"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "50591",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "In this question, Animal is a class while ‘lion’ is an object. Hence the code is being written to print the object.",
    "correct_answer": 50591
  },
  {
    "id": 5629474,
    "quiz_id": 1166764,
    "quiz_group_id": null,
    "assessment_question_id": 16198648,
    "position": 10,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>Compile time polymorphism is also known as _________ polymorphism.</span>",
    "answers": [
      {
        "id": 22898,
        "text": "dynamic"
      },
      {
        "id": 52402,
        "text": "non-static"
      },
      {
        "id": 10596,
        "text": "static"
      },
      {
        "id": 14741,
        "text": "stagnant"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "10596",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "In Compile time Polymorphism, the call is resolved by the compiler. Hence it is known as static polymorphism.",
    "correct_answer": 10596
  }
];

const unit3 = [
  {
    "id": 5629475,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 1,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "<span>Which syntax (to initialize an array-in Java) is correct?</span>",
    "answers": [
      {
        "id": 68972,
        "text": "int[] array=[1,2,3]"
      },
      {
        "id": 84133,
        "text": "int[] array= new array[]"
      },
      {
        "id": 43497,
        "text": "int[] array=new int[5]"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "43497",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "An array is a sequential data structure that holds homogenous data types. Initializing an array can be done in two ways:  int[] array=new int[5] String[] array={“abc”,”cab”}.  In the second method, the compiler automatically allocates memory in the heap for us. In the first method, we allocate memory for the array using the new keyword. Option A is wrong because it should be curly braces, instead of square braces.",
    "neutral_comments_html": "<p><span>An array is a sequential data structure that holds homogenous data types. Initializing an array can be done in two ways: </span></p>\n<ol>\n<li><span>int[] array=new int[5] </span></li>\n<li><span>String[] array={“abc”,”cab”}. </span></li>\n</ol>\n<p><span>In the second method, the compiler automatically allocates memory in the heap for us. In the first method, we allocate memory for the array using the new keyword. Option A is wrong because it should be curly braces, instead of square braces.</span></p>",
    "correct_answer": 43497
  },
  {
    "id": 5629476,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 2,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>What would be the output of the following piece of code?</span></p>\n<p><span> int[] array=new int[3];</span></p>\n<p><span>                  for(int i=0;i&lt;4;i++)</span></p>\n<p><span>                  {</span></p>\n<p><span>                   System.out.println(array[i]);</span></p>\n<p><span>                   }</span></p>\n",
    "answers": [
      {
        "id": 15656,
        "text": "0 0 0"
      },
      {
        "id": 12258,
        "text": "Error - array index out of bounds"
      },
      {
        "id": 30089,
        "text": "0 0 0 0"
      },
      {
        "id": 72758,
        "text": "0 1 2 3"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "12258",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "When we initialized the array, we allocated an array of size 3. However, this for loop attempts to access index 4 of array, although such index has not been created. This results in arun time error which may say array index out of bounds.",
    "neutral_comments_html": "When we initialized the array, we allocated an array of size 3. However, this for loop attempts to access index 4 of array, although such index has not been created. This results in a run time error which may say array index out of bounds.",
    "correct_answer": 12258
  },
  {
    "id": 5629477,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": 16198659,
    "position": 3,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<div id=\"question_1438675_question_text\" class=\"question_text user_content enhanced\">\n<p><span>Let us consider an Integer array with the name arr. Which of the following is the correct syntax of Java’s predefined array sort method?</span></p>\n</div>\n<div class=\"answers\">\n<div class=\"answers_wrapper\">\n<div id=\"answer_6497\" class=\"answer answer_for_\n         \n         \n         \n         \n          \" title=\"Array.sort(arr).\"></div>\n</div>\n</div>\n",
    "answers": [
      {
        "id": 57893,
        "text": "Array.sort(arr)"
      },
      {
        "id": 59170,
        "text": "arr.sort()"
      },
      {
        "id": 34498,
        "text": "Arrays.sort(arr)"
      },
      {
        "id": 2751,
        "text": "sort(arr)"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "34498",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "Java provides a predefined methodsortofArraysclass to sort arrays",
    "neutral_comments_html": "<span>Java provides a predefined method </span><i><span>sort</span></i><span><span> </span>of<span> </span></span><i><span>Arrays</span></i><span><span> </span>class to sort arrays</span>",
    "correct_answer": 34498
  },
  {
    "id": 5629478,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 4,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<div id=\"question_1438672_question_text\" class=\"question_text user_content enhanced\">\n<p><span>Which of the following represents a dynamic array that is inbuilt in Java?</span></p>\n</div>\n<div class=\"answers\">\n<div class=\"answers_wrapper\">\n<div id=\"answer_5458\" class=\"answer answer_for_ hover\" title=\"Array.\"></div>\n</div>\n</div>\n",
    "answers": [
      {
        "id": 89158,
        "text": "Array"
      },
      {
        "id": 96002,
        "text": "ArrayList"
      },
      {
        "id": 69332,
        "text": "Map"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "96002",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "The built in dynamic array that can be used in Java is ArrayList. ArrayList is a resizable array. It is found in the java.util package. The main difference in using ArrayList as opposed to the built in array in java, is that the size of an ArrayList is modifiable.",
    "correct_answer": 96002
  },
  {
    "id": 5629479,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": 16198661,
    "position": 5,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<div id=\"question_1438656_question_text\" class=\"question_text user_content enhanced\">\n<p><span>How much memory is required for an integer array of size 9?</span></p>\n</div>\n<div class=\"answers\">\n<div class=\"answers_wrapper\">\n<div id=\"answer_8446\" class=\"answer answer_for_ hover\" title=\"A contiguous memory block of 20 bytes.\"></div>\n</div>\n</div>\n",
    "answers": [
      {
        "id": 96005,
        "text": "A contiguous memory block of 20 bytes"
      },
      {
        "id": 8400,
        "text": "Memory can be scattered but 40 bytes must be available"
      },
      {
        "id": 14839,
        "text": "A contiguous memory block of 36 bytes"
      },
      {
        "id": 77090,
        "text": "Scattered memory of 36 bytes"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "14839",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "An array is a sequential data structure that holds homogenous data types. An integer array requires 4 bytes per index, thus an array of size 9 requires 4 * 9 bytes of contiguous memory. It is important to note that arrays require contiguous memory blocks.",
    "correct_answer": 14839
  },
  {
    "id": 5629480,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": 16198662,
    "position": 6,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<div id=\"question_1438687_question_text\" class=\"question_text user_content\">\n<p><span>Which package does String class belong to in Java?</span></p>\n</div>\n<div class=\"answers\">\n<div class=\"answers_wrapper\">\n<div id=\"answer_2946\" class=\"answer answer_for_\n         \n         \n         \n         \n          \" title=\"java.awt.\"></div>\n</div>\n</div>\n",
    "answers": [
      {
        "id": 12869,
        "text": "java.awt"
      },
      {
        "id": 87556,
        "text": "java.util"
      },
      {
        "id": 18694,
        "text": "java.lang"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "18694",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "In Java, String is a non-primitive data type, it is a class. String class is defined in the lava.lang package.",
    "correct_answer": 18694
  },
  {
    "id": 5629481,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": 16198663,
    "position": 7,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<div id=\"question_1438719_question_text\" class=\"question_text user_content enhanced\">\n<p><span>What is the difference between next and nextLine methods of Scanner class?</span></p>\n</div>\n<div class=\"answers\">\n<div class=\"answers_wrapper\">\n<div id=\"answer_3951\" class=\"answer answer_for_\" title=\"Next method reads input included spades, while nextLine stops reading input when space occurs.\"></div>\n</div>\n</div>\n",
    "answers": [
      {
        "id": 95992,
        "text": "Next method reads input included spades, while nextLine stops reading input when space occurs"
      },
      {
        "id": 91947,
        "text": "Next method allows larger inputs"
      },
      {
        "id": 3731,
        "text": "Next method stops reading input when a space occurs, and nextLine method reads till a comma occurs"
      },
      {
        "id": 57843,
        "text": "Next method stops reading input when a space occurs, while nextLine reads input including spaces till end of line"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "57843",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "We can input strings using Scanner class in java. Scanner class has two methods used to input strings, next method and nextLine method. Next method stops reading when a space occurs while nextLine reads the entire line of input including spaces.",
    "correct_answer": 57843
  },
  {
    "id": 5629482,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": 16198664,
    "position": 8,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>What is the output of the following piece of code?</span></p>\n<p><span>String s1=”abcdefghijk”;</span></p>\n<p><span>System.out.println(s1.substring(1,5));</span></p>\n",
    "answers": [
      {
        "id": 66097,
        "text": "abcde"
      },
      {
        "id": 75072,
        "text": "bcdef"
      },
      {
        "id": 15802,
        "text": "bcde"
      },
      {
        "id": 79764,
        "text": "abcd"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "15802",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "The substring method is used to obtain a part of the string. The important point to note is - substring(start index,end index) - in this the start index is inclusive while the end index is not.",
    "neutral_comments_html": "The substring method is used to obtain a part of the string. The important point to note is - substring(start index,end index) - in this the start index is inclusive while the end index is not. ",
    "correct_answer": 15802
  },
  {
    "id": 5629483,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": 16198665,
    "position": 9,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>What is the output of the following snippet of code?</span></p>\n<p><span>String s1=new String(“abdefghijk”);</span></p>\n<p><span>System.out.println(s1.charAt(1));</span></p>\n",
    "answers": [
      {
        "id": 68745,
        "text": "A"
      },
      {
        "id": 23821,
        "text": "ab"
      },
      {
        "id": 78531,
        "text": "b"
      },
      {
        "id": 79759,
        "text": "d"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "78531",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "The charAt method is used to retrieve the character at a particular index in the string. Remember, that string indexing begins from 0.",
    "correct_answer": 78531
  },
  {
    "id": 5629484,
    "quiz_id": 1166765,
    "quiz_group_id": null,
    "assessment_question_id": null,
    "position": 10,
    "question_name": "Question",
    "question_type": "multiple_choice_question",
    "question_text": "\n<p><span>What is the output of the following code snippet?</span></p>\n<p><span>     </span><span>            String s=”hElLO WoRlD”;</span></p>\n<p><span>                 String[] words=s.toLowerCase().split(“ ”);</span></p>\n<p><span>                 System.out.println(words[2]);</span></p>\n",
    "answers": [
      {
        "id": 94846,
        "text": "hello"
      },
      {
        "id": 26249,
        "text": "world"
      },
      {
        "id": 25590,
        "text": "Error -array index out of bounds"
      },
      {
        "id": 10134,
        "text": "WoRlD"
      }
    ],
    "variables": null,
    "formulas": null,
    "answer_tolerance": null,
    "formula_decimal_places": null,
    "matches": null,
    "flagged": false,
    "correct": true,
    "points_possible": 1,
    "points": 1,
    "answer": "25590",
    "correct_comments": "",
    "incorrect_comments": "",
    "neutral_comments": "The split function will split the string at each occurrence of the space character. It will thus return an array of words. However, since there are only two words in the above example, the last index of the array is 1",
    "correct_answer": 25590
  }
];

const unit4 = {
  "quiz_submission_questions": [
    {
      "id": 5629485,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": 16198701,
      "position": 1,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "<span>Find the incorrect answer from the following options:</span>",
      "answers": [
        {
          "id": 73680,
          "text": "Inheritance helps to get sources from one class to another class."
        },
        {
          "id": 70046,
          "text": "Inheritance does not enforce code reusability."
        },
        {
          "id": 51674,
          "text": "In Inheritance child classes can have their own properties and methods."
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": true,
      "points_possible": 1,
      "points": 1,
      "answer": "70046",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "In Inheritance we can enforce code reusability. The basic role of inheritance is acquiring properties from base class to derived class. It's basically reusing the previous class to acquire the role for it.",
      "correct_answer": 70046
    },
    {
      "id": 5629486,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": 16198703,
      "position": 2,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "<span>Find the incorrect answer from the following options:</span>",
      "answers": [
        {
          "id": 2436,
          "text": "The Single Level Inheritance performs Derived class extends the Base class."
        },
        {
          "id": 30862,
          "text": "In Single Level Inheritance the n-2 level of Hierarchy is performed."
        },
        {
          "id": 64240,
          "text": "In Single Level Inheritance child class can call methods by Super keyword or by base name."
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": true,
      "points_possible": 1,
      "points": 1,
      "answer": "30862",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "In Single Level Inheritance the inheritance can have only one level of Hierarchy is performed whereas multilevel Inheritance performs n-2 level of Hierarchy.",
      "neutral_comments_html": "In Single Level Inheritance the inheritance can have only one level of Hierarchy is performed whereas  multilevel Inheritance performs n-2 level of Hierarchy.",
      "correct_answer": 30862
    },
    {
      "id": 5629487,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": 16198704,
      "position": 3,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "<span>Find the incorrect answer from the following options:</span>",
      "answers": [
        {
          "id": 26250,
          "text": "The Multi Level Inheritance cannot perform Derived class extends from the Base class."
        },
        {
          "id": 98827,
          "text": "In MultiLevel Inheritance only the n-2 level of Hierarchy is performed."
        },
        {
          "id": 60547,
          "text": "In MultiLevel Inheritance child class cannot call methods by Final keyword or by base name."
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": false,
      "points_possible": 1,
      "points": 0,
      "answer": "60547",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "The Multi Level Inheritance can perform Derived class extends from the Base class. All type of inheritance can perform derived class extends from the base class",
      "correct_answer": 26250
    },
    {
      "id": 5629488,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": null,
      "position": 4,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "\n<table>\n<tbody>\n<tr>\n<td>\n<p><span>Final class Food{  </span></p>\n<p><span>void food(){System.out.println(\"Type of Food\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Veg extends Food{  </span></p>\n<p><span>void veg(){System.out.println(\"Vegetarian\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Nonveg extends Food{  </span></p>\n<p><span>void nonveg(){System.out.println(\"Non Vegetarian\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Kindfood{  </span></p>\n<p><span>public static void main(String args[]){  </span></p>\n<p><span>Nonveg d=new Nonveg();  </span></p>\n<p><span>Veg v = new Veg();</span></p>\n<p><span>d.food();  </span></p>\n<p><span>//v.food();   </span></p>\n<p><span>}}</span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p>Answer the questions based on the given code :</p>\n<p><span>Which type of concept is used in the above code:</span></p>\n",
      "answers": [
        {
          "id": 89346,
          "text": "Single Level Inheritance"
        },
        {
          "id": 80810,
          "text": "MultiLevel Inheritance"
        },
        {
          "id": 63318,
          "text": "Hierarchical Level Inheritance"
        },
        {
          "id": 25759,
          "text": "Run-Time polymorphism"
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": true,
      "points_possible": 1,
      "points": 1,
      "answer": "63318",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "The Above code has been implemented in Hierarchical Inheritance because the classes Veg and Nonveg has been directly extended with Food Class.",
      "correct_answer": 63318
    },
    {
      "id": 5629489,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": null,
      "position": 5,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "\n<table>\n<tbody>\n<tr>\n<td>\n<p><span>Final class Food{  </span></p>\n<p><span>void food(){System.out.println(\"Type of Food\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Veg extends Food{  </span></p>\n<p><span>void veg(){System.out.println(\"Vegetarian\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Nonveg extends Food{  </span></p>\n<p><span>void nonveg(){System.out.println(\"Non Vegetarian\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Kindfood{  </span></p>\n<p><span>public static void main(String args[]){  </span></p>\n<p><span>Nonveg d=new Nonveg();  </span></p>\n<p><span>Veg v = new Veg();</span></p>\n<p><span>d.food();  </span></p>\n<p><span>//v.food();   </span></p>\n<p><span>}}</span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p>Answer the question based on the given code - </p>\n<p><span>In which Line upcasting has been used:</span></p>\n",
      "answers": [
        {
          "id": 78581,
          "text": "Veg v = new Veg();"
        },
        {
          "id": 44150,
          "text": "d.food();"
        },
        {
          "id": 35459,
          "text": "void food()"
        },
        {
          "id": 13583,
          "text": "No Upcasting has been performed in the Code."
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": true,
      "points_possible": 1,
      "points": 1,
      "answer": "13583",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "We won’t use any upcasting concept in Hierarchical Inheritance. It is a concept of Runtime Polymorphism.",
      "correct_answer": 13583
    },
    {
      "id": 5629490,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": null,
      "position": 6,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "\n<table>\n<tbody>\n<tr>\n<td>\n<p><span>Final class Food{  </span></p>\n<p><span>void food(){System.out.println(\"Type of Food\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Veg extends Food{  </span></p>\n<p><span>void veg(){System.out.println(\"Vegetarian\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Nonveg extends Food{  </span></p>\n<p><span>void nonveg(){System.out.println(\"Non Vegetarian\");}  </span></p>\n<p><span>}  </span></p>\n<p><span>class Kindfood{  </span></p>\n<p><span>public static void main(String args[]){  </span></p>\n<p><span>Nonveg d=new Nonveg();  </span></p>\n<p><span>Veg v = new Veg();</span></p>\n<p><span>d.food();  </span></p>\n<p><span>//v.food();   </span></p>\n<p><span>}}</span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p>Answer the question based on the given code: </p>\n<p><span>What will be the output from the above code:</span></p>\n",
      "answers": [
        {
          "id": 60473,
          "text": "Type of Food"
        },
        {
          "id": 9350,
          "text": "Vegetarian"
        },
        {
          "id": 3999,
          "text": "Non Vegetarian"
        },
        {
          "id": 98608,
          "text": "Error"
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": false,
      "points_possible": 1,
      "points": 0,
      "answer": "60473",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "The Code has an error and does not execute the code perfectly because in Parent class Named Food has an Final keyword. If there is no final keyword then the output would have been “Type of Food”.",
      "neutral_comments_html": "<span>The Code has an error and does not execute the code perfectly because in Parent class Named Food has an Final keyword. If there is no final keyword then the output would have been “</span><i><span>Type of Food”</span></i><span>.</span>",
      "correct_answer": 98608
    },
    {
      "id": 5629491,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": 16198708,
      "position": 7,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "<span> Find the incorrect answer from the following options</span>",
      "answers": [
        {
          "id": 44897,
          "text": "The Single Level Inheritance performs Derived class extends the Base class"
        },
        {
          "id": 22039,
          "text": "In Single Level Inheritance only one level of Hierarchy is performed."
        },
        {
          "id": 6894,
          "text": "In Single Level Inheritance child class cannot call methods by Super keyword or by base name."
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": true,
      "points_possible": 1,
      "points": 1,
      "answer": "6894",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "In Single level Inheritance the Inherited child class can call methods by Super keyword or by base name. Only Final keyword cannot be used.",
      "correct_answer": 6894
    },
    {
      "id": 5629492,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": null,
      "position": 8,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "\n<p><span>Find the incorrect answer from the following options - </span></p>\n<ol>\n<li><span>The Multi Level Inheritance can perform Derived class extends from the Base class.</span></li>\n<li><span>In MultiLevel Inheritance n-2 level of Hierarchy is performed.</span></li>\n<li><span>In MultiLevel Inheritance child class can call methods by Final keyword or by base name.</span></li>\n</ol>\n",
      "answers": [
        {
          "id": 60428,
          "text": "1 and 2"
        },
        {
          "id": 76371,
          "text": "2 and 3"
        },
        {
          "id": 26755,
          "text": "1 and 3"
        },
        {
          "id": 91792,
          "text": "3 only"
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": false,
      "points_possible": 1,
      "points": 0,
      "answer": "76371",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "If you have the final keyword then you cannot perform Inheritance because the final keyword makes the final output and you cannot change the value or method.",
      "correct_answer": 91792
    },
    {
      "id": 5629493,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": 16198710,
      "position": 9,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "\n<p><span>Find the incorrect statement about Multiple Inheritance.</span></p>\n<ol>\n<li><span>Multiple Inheritance does not produce any ambiguity.</span></li>\n<li><span>Multiple Inheritance cannot be implemented through different ways, not as a direct method.</span></li>\n<li><span>Multiple Inheritance Supports in Java</span></li>\n</ol>\n",
      "answers": [
        {
          "id": 72858,
          "text": "1 and 2"
        },
        {
          "id": 18995,
          "text": "2 and 3"
        },
        {
          "id": 89089,
          "text": "1 and 3"
        },
        {
          "id": 36216,
          "text": "1,2 and 3"
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": false,
      "points_possible": 1,
      "points": 0,
      "answer": "89089",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "Multiple inheritance can be implemented through interface concept where you will use an keyword known as implements where you won't produce any ambiguity while executing the code.Multiple inheritance does not support in java because it produces Ambiguity",
      "correct_answer": 36216
    },
    {
      "id": 5629494,
      "quiz_id": 1166766,
      "quiz_group_id": null,
      "assessment_question_id": 16198788,
      "position": 10,
      "question_name": "Question",
      "question_type": "multiple_choice_question",
      "question_text": "\n<div id=\"question_2308939_question_text\" class=\"question_text user_content enhanced\">\n<p><span> How many classes are involved in Single Level Inheritance?</span></p>\n</div>\n<div class=\"answers\"></div>\n<p> </p>\n",
      "answers": [
        {
          "id": 92848,
          "text": "1"
        },
        {
          "id": 74643,
          "text": "2"
        },
        {
          "id": 88958,
          "text": "3"
        }
      ],
      "variables": null,
      "formulas": null,
      "answer_tolerance": null,
      "formula_decimal_places": null,
      "matches": null,
      "flagged": false,
      "correct": true,
      "points_possible": 1,
      "points": 1,
      "answer": "74643",
      "correct_comments": "",
      "incorrect_comments": "",
      "neutral_comments": "Single level inheritance contains only two classes such as Base class and the Derived class where it has only one level of interaction with other classes.   Cancel",
      "neutral_comments_html": "\n<div class=\"question_comment question_neutral_comment comment\">\n<p><span>Single level inheritance contains only two classes such as Base class and the Derived class where it has only one level of interaction with other classes.</span></p>\n</div>\n<div class=\"clear\"></div>\n<div class=\"button-container\">Cancel</div>\n<p> </p>\n",
      "correct_answer": 74643
    }
  ]
};

const unit5 = [];

const unit6 = [];

const unit7 = [];

const unit8 = [];

const unit9 = [];

const unit10 = [];

const unit11 = [];

const unit12 = [];

const unit13 = [];

const unit14 = [];

const unit15 = [];

const ca1 = [];

const ca2 = [];

const ca3 = [];

const compiled = [
  ...unit1,
  ...unit2,
  ...unit3,
  ...unit4,
  ...unit5,
  ...unit6,
  ...unit7,
  ...unit8,
  ...unit9,
  ...unit10,
  ...unit11,
  ...unit12,
  ...unit13,
  ...unit14,
  ...unit15,
  ...ca1,
  ...ca2,
  ...ca3,
];


