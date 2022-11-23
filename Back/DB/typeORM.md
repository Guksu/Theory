# **기초**

- OneToMany는 1:N관계
- ManyToOne은 N:1관계

- 1:1 관계 시, @JoinColumn은 마스터테이블에만 추가시킨다.(Human / Kim 테이블이 존재 시 , Human테이블에만 @JoinColumn추가)

```
@Entity()
export class Human{
    @OneToOne(()=>Kim,(kim)=>kim.human)
    @JoinColumn()
    @JoinColumn({ name: "man_id" }) // 기본값은 kimId이지만 name 옵션을 사용하면 해당 이름으로 변경된다.
    @JoinColumn({ referencedColumnName: "name" }) // 기본값으로 kim테이블의 id를 참조하지만 해당 옵션을 사용하면 원하는 컬럼을 참조한다.
    @JoinColumn([
    { name: "category_id", referencedColumnName: "id" },
    { name: "locale_id", referencedColumnName: "locale_id" }
])  //여러 컬럼을 참조 시 사용
    kim:Kim
}

@Entity()
export class Kim{
    @OneToOne(()=>Human,(human)=>human.kim)
    human:Human
}
```

- 다대다 관계일 경우, 마스터 테이블에만 JoinTable()을 사용한다.

```
@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany(() => Photo, (photo) => photo.albums)
    @JoinTable()
    photos: Photo[]
}

@Entity()
export class Photo {
    /// ... other columns

    @ManyToMany(() => Album, (album) => album.photos)
    albums: Album[]
}

이 경우 , 실제 DB는 다음의 테이블이 만들어진다.
+-------------+--------------+----------------------------+
|                album_photos_photo_albums                |
+-------------+--------------+----------------------------+
| album_id    | int(11)      | PRIMARY KEY FOREIGN KEY    |
| photo_id    | int(11)      | PRIMARY KEY FOREIGN KEY    |
+-------------+--------------+----------------------------+
```

- @CreateDateColumn / @UpdateDateColumn 으로 생성날짜 및 수정날짜를 쉽게 관리할 수 있다.

```
@CreateDateColumn()
createAt : Date

@UpdateDateColumn()
updateAt : Date
```

- 다양한 컬럼 옵션을 사용가능하다.
  1. type : type지정
  2. name : DB상 컬럼이름
  3. length / width : Mysql정수의 경우 width로 표시
  4. nullable : 기본값은 false
  5. uni

```
@Column({
    type: "varchar",
    length: 150,
    unique: true,
    // ...
})
name: string;
```

- repository 함수 : https://typeorm.io/repository-api
- find 함수 옵션 : https://typeorm.io/find-options
