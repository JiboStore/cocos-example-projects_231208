import { _decorator, Component, game, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {
    start() {
        game.frameRate = 120;
    }

    update(deltaTime: number) {
        
    }
}
