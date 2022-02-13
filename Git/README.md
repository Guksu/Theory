## **명령어**

1. 기본설정

- git config --global user.name "이름"
- git config --global user.email "이메일"
- git status // git 상태확인

2. 명령어

- git add 파일명 // 파일 하나 담기
- git add . //모든파일 담기
- git commit -m "메시지" //커밋
- git commit -am "메시지" // 새로운 파일이 없는경우 커밋
- git log // log확인

3. reset / revert

- reset은 돌아간 시점이후의 내역을 모두 삭제하고 이전으로 돌아가는 것
- git reset --hard commit코드

- revert는 과거의 기록으로 돌아가서 작업을 수행하지만 가장 최근의 기록은 남겨둔다.
- git revert commit코드

4. branch

- git branch // 브랜치 확인
- git branch 브랜치명 // 브랜치 추가
- git switch 브랜치명 // 브랜치이동
- git branch -d 브랜치명 //브랜치 삭제
- git branch -m 기존브랜치명 새 브랜치명 // 브랜치 이름 바꾸기
- [Main에서 실행]git merge 브랜치명 // 브랜치 합치기 // 합쳐진 브랜치의 내역이 남아있다. // reset사용이 가능
- [합쳐질 브랜치에서 실행]git rebase 브랜치명 // 브랜치 합치기 // 합쳐진 브랜치의 내역이 기존 main으로 이동된다. ==> 아직 main브랜치는 합쳐진 브랜치명이전의 시점이므로 main으로 이동 후
  git merge 브랜치명으로 main을 최신상태로 끌어올려야한다.

## **git-flow전략**

- 여러 개발자가 하나의 저장소를 효과적으로 활용하기 위한 전략
- 메인 브랜치

  1. main

  - 라이브 서버에 제품으로 출시되는 브랜치

  2. develop

  - 다음 출시 버전을 대비하여 사용하는 브랜치

- 보조 브랜치

  1. feature

  - 기능 개발 브랜치

  2. release

  - 다음 버전 출시를 준비하는 브랜치로 develop 브랜치를 이쪽으로 옮긴 후 테스트를 진핸하고 main과 합친다.

  3. hotfix

  - main브랜치의 버그를 수정하는 브랜치

## **github-flow**

- master 브랜치만 유지하고 필요에 따라 브랜치를 생성 후 merge하는 방법
- 코드 리뷰 / 코드 완성 등등 후 Pull Request를 통해 논의 후 commit하여 수정하거나 최종 코드를 관리자가 merge한다.
