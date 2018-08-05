# Form builder


#### App for creating form tree

To use this, copy this repository, than run

```npm install```

and 

```npm start```.

##### Getting started:

1: Click "Add Input" to create first input of your form. You can click it in any time of creating a form (to create as many "level-0" inputs you will want to).

2: Write a question you want to ask person (user) which will filling this form.

3: Specify a type of answer that user will be able to give (text, number, yes/no).

###### Egzample: 

Question: Do you like ice-cream?

Type: Yes/No

(in this case user will be able to answer only in "Yes" or "No" way).

4: Click "Add Sub-Input" to create form-question which refers previous question context and conditions.

###### Egzample: 

Conditions: Equals Yes

Question: How many cones would you eat at once?

Type: Number 

(user will be asked "How many cones would you eat at once?" and he/she will be able to answer only by writing a number).

5: If you want to delete some input just click delete on chosen one.

REMEMBER: you will also delete sub-inputs which are belong to chosen input.

6: When whole form is ready click "Done" to save what you've create and transform it to ready-to-use form for users!

Note: Whole form will be saved as db.json file. If you want to correct some inputs or add some by yourself to already existing form, just look into that file.