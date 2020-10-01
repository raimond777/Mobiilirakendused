import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  squareAnimation: Animation;
  buttonAnimation: Animation;
  isStarted=false;


  constructor(private activatedRoute: ActivatedRoute,
    private animation: AnimationController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.squareAnimation = this.animation.create()
    .addElement(document.querySelector(`.color-change`))
    .duration(2000)
    .iterations(Infinity)
    // .fromTo("backgroundColor", "green", "red")
    // .fromTo("transform", "translateX(0px)","translateX(100px)")
    .keyframes([
      {offset: 0.2, background:`blue` },
      {offset: 0.4, opacity:`0.3` },
      {offset: 0.5, transform:`translateX(100px)`  },
      {offset: 0.5, transform:`translateY(100px)`  },
      {offset: 0.5, borderRadius:`50%`  },
    ])

    
    this.buttonAnimation = this.animation.create()
    .addElement(document.querySelector(`.mock-button`))
    .duration(2000)    
    .keyframes([
      {offset: 0, transform:`scale(1)` },
      {offset: 0.5, transform:`scale(1.1)` },   
      {offset: 1.0, transform:`scale(1)`  },
    ])
  }


  
  onAnimation() {
    if(this.isStarted==false){    //==kontrollib
       this.squareAnimation.play();
    this.isStarted=true;}        //=
    else{
      this.squareAnimation.pause();
      this.isStarted= false;
    }  }



    onButtonClick(){
      this.buttonAnimation.play();

    }

  }

