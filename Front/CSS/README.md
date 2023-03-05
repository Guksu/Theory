## **inline /inline-block**

- inline은 text크기만큼 공간을 가지며 width / height가 적용이 불가능
- inline-block은 width / height가 적용되며 기본적으로 text크기만큼 공간을 가진다.

## **Position**

- static : 모든 태그들의 기본상태
- relative : static이었을 경우를 기준으로 움직여진다. 이 경우 각각의 방형의 기준은 태그 안쪽 방향으로 이동하므로 바깥쪽으로 이동하는 경우에는 음수값을 넣어준다.
- absolute : static속성을 가지지 않는 부모를 기준으로 움직인다. 만약 그러한 속성을 가진 부모가 없는 경우 body태그가 기준이 된다.
- fixed: 화면의 위치에 고정시킨다.

## **flex**

```
flex : 1 1 0
```

- 위의 코드에서 순서대로 flex-grow / flex-shrink / flex-basis이다.

1. flex-grow

- 0일 경우 flex container의 크기가 커져도 flex item은 원래 크기를 유지한다. 1 이상이면 flex container를 채우도록 크기가 커진다.

2. flex-shrink

- 기본값은 1이며 flex container의 크기가 작아지면 flex item의 크기도 작아진다. 0일경우 크기가 줄어들지 않는다.

3. flex-basis

- flex item의 기본 크기를 결정하는 속성으로 기본값은 auto이다.
- auto일 경우 크기는 상대적이지만 0일경우 크기는 절대적으로 결정된다.
  <img src="https://user-images.githubusercontent.com/87972252/152566170-d874f915-8f4a-4497-8684-416a4d33b52a.png"/>
  - 출처:https://d2.naver.com/helloworld/8540176

## **CSS in CSS / CSS in JS**

- https://www.samsungsds.com/kr/insights/web_component.html

## 레이아웃

- 렌더링 시 , 레이아웃의 크기를 계산할 때 Global 레이아웃은 전체를 한 번에 레이아웃하지만, 윈도우 사이즈가 변경되거나 폰트가 변경되는 경우에는 다시 계산한다.

- 크게 JS -> Layout -> Paint -> Composite 과정으로 화면이 그려진다.

  1.  Layout : width, height, font등이 변경
  2.  Paint : color, backgrount등이 변경
  3.  Composite : opacity, transform등이 변경

  - 따라서 애니메이션을 사용하는 경우 transform이나 webanimation을 사용해야 좋다.
