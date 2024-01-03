import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/comment.model'
@Injectable()
export class AppService {
  comments: IComment[] = [
    {
      username: 'Jonathan',
      profileImg: 'assets/images/profile/profile-2.png',
      likesCount: '2.4 K',
      hoursAgo: '11 Hours ago',
      commentText: 'I had Great Experience out there. I would say its perfect for a coffee lover.',
      featured: true,
      postImages: [
        'assets/images/cover/cover-1.jpg',
        'assets/images/cover/cover-2.jpg',
        'assets/images/cover/cover-3.jpg',
        'assets/images/cover/cover-4.jpg'
      ],
    },
    {
      username: 'Jonathan',
      profileImg: 'assets/images/profile/profile-3.png',
      likesCount: '2.4 K',
      hoursAgo: '11 Hours ago',
      commentText: 'I had Great Experience out there. I would say its perfect for a coffee lover.',
      featured: false,
      postImages: [],
    },
    {
      username: 'Jonathan',
      profileImg: 'assets/images/profile/profile-1.png',
      likesCount: '2.4 K',
      hoursAgo: '11 Hours ago',
      commentText: 'I had Great Experience out there. I would say its perfect for a coffee lover.',
      featured: false,
      postImages: [],
    }
  ];

  constructor() { }

  getComments(): Observable<IComment[]> {
    let data = new Observable<IComment[]>(observer => {
      setTimeout(() => {
        observer.next(this.comments);
      }, 1000);
    });
    return data;
  }

}
