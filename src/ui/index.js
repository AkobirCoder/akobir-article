export {default as Input} from './input';

export const loginInputProps = [
    {
        id: 'floatingEmail',
        type: 'email',
        name: 'email',
        completeName: 'email',
        placeholder: 'name@example.com',
        label: 'Email address',
    },
    {
        id: 'floatingPassword',
        type: 'password',
        name: 'password',
        completeName: 'password',
        placeholder: 'Password',
        label: 'Password',
    }
];

export const registerInputProps = [
    {
        id: 'floatingUsername',
        type: 'text',
        name: 'username',
        completeName: 'username',
        placeholder: 'username',
        label: 'Username',
    },
    {
        id: 'floatingEmail',
        type: 'email',
        name: 'email',
        completeName: 'email',
        placeholder: 'name@example.com',
        label: 'Email address',
    },
    {
        id: 'floatingPassword',
        type: 'password',
        name: 'password',
        completeName: 'password',
        placeholder: 'Password',
        label: 'Password',
    }
];

export {default as Loader} from './loader';
export {default as Textarea} from './textarea';
export {default as ArticleForm} from './article-form';
export {default as UserForm} from './user-form';