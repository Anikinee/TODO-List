import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scripting Lab';
  //players = ["virat", "sachin"];
  // message: string = "Hello 5B!";
  //inputvalue:string = "Initial Value";

  todoList = [
    {task:'Breakfast', completed:false, message:"Hello!! Good Morning!!", opt1: 'Idli Sambar', opt2: 'Dosa'},
    {task:'College', completed:false, message:'Its time to go to college!!'},
    {task:'Shopping', completed:false, message:'Its Shopping time!!', opt1:'Grocery Store', opt2:'Clothes Store',},
    {task:'Lunch', completed:false, message:'Good Afternoon!! Have your lunch please..!!', opt1: 'Paneer Fried Rice', opt2: 'Roti Tadka'},
    {task:'Swimming', completed:false,message:'Freshen up your mood by swimming!!', opt1:'Marena', opt2:'Sundar Resort'},
    {task:'Dinner', completed:false, message:'Hello!! Have your dinner and then go to sleep..Good Night!!', opt1: 'Chicken Fried Rice', opt2: 'Paneer Paratha'},
  ];
}
