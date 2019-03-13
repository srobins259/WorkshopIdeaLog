import { Idea } from './idea';
import { User } from './user';
import { Like } from './like';

export const IdeaDB: Idea[] = [
    {
        id: 1,
        title: 'Car Bazooka',
        description: 'Hidden tennis ball launcher that shoots the car in front of you when they are an idiot.',
        uid: 'aos09df8sda09s9dA8dsDS',
        likeCount: 32,
        created: new Date('01-15-2019'),
        modified: new Date('01-22-2019'),
    },
    {
        id: 2,
        title: 'Ostrich Saddle Delux',
        description: 'Just like a normal ostrich saddle but with bedazzles.',
        uid: 'a90sfd890adsoijav82jnv92jDSJ',
        likeCount: 15,
        created: new Date('01-18-2019'),
        modified: new Date('01-28-2019'),
    },
    {
        id: 3,
        title: 'Remote Control Golf Ball',
        description: 'Never miss a putt again.',
        uid: 'as98fdsdd98svd8s8ada8svd8',
        likeCount: 11,
        created: new Date('02-05-2019'),
        modified: new Date('02-15-2019'),
    },
    {
        id: 4,
        title: 'Burrito Roller',
        description: 'Get my burrito rolled right so that the person at PepperJax will quit breaking the tortillas!',
        uid: 'as09sdf79sd87asdf87bd98x',
        likeCount: 45,
        created: new Date('03-01-2019'),
        modified: new Date('03-01-2019'),
    },
    {
        id: 5,
        title: 'Uno© Game With Extra Cheese',
        description: 'Classic Uno attack, but instead of shooting out cards it errupts with macaroni.',
        uid: 'aos09df8sda09s9dA8dsDS',
        likeCount: 100,
        created: new Date('03-04-2019'),
        modified: new Date('03-12-2019'),
    }
];

export const UserDB: User[] = [{
    email: 'bob@bob.com',
    displayName: 'Bobenator3000',
    uid: 'aos09df8sda09s9dA8dsDS',
    created: new Date('01-01-2019'),
    modified: new Date('01-01-2019'),
},
{
    email: 'rob@rob.com',
    displayName: 'Robenator3001',
    uid: 'as09sdf79sd87asdf87bd98x',
    created: new Date('01-01-2019'),
    modified: new Date('01-01-2019'),
},
{
    email: 'job@job.com',
    displayName: 'Jobenator3002',
    uid: 'as98fdsdd98svd8s8ada8svd8',
    created: new Date('01-01-2019'),
    modified: new Date('01-01-2019'),
},
{
    email: 'ricky@ricky.com',
    displayName: 'ricky1',
    uid: 'a90sfd890adsoijav82jnv92jDSJ',
    created: new Date('01-01-2019'),
    modified: new Date('01-01-2019'),
}];

export const LikeDB: Like[] = [{
    idea: 1,
    uid: 'stra90sfd890adsoijav82jnv92jDSJing',
    created: new Date('03-12-2019'),
},
{
    idea: 2,
    uid: 'a90sfd890adsoijav82jnv92jDSJ',
    created: new Date('03-12-2019'),
},
{
    idea: 3,
    uid: 'a90sfd890adsoijav82jnv92jDSJ',
    created: new Date('03-12-2019'),
}];