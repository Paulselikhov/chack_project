import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {

 


  return (
    <button {...props}  className={classes.myBtn}>   {/*Разворачиваем пропсы, получаем стиль как свойство объекта */}
        {children}  {/* Эта хуйня указывает на то, что берётся текст конкретно в app.js */}
         {/*Можно прокинуть текст и вот так <MyButton textButton = 'текст кнопки' /> */}
      </button>
  )
}

export default MyButton