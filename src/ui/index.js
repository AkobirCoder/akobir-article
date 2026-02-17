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

export const userFormInputProps = [
    {
        id: 'floatingImage',
        type: 'file',
        name: 'image',
        completeName: 'image',
        placeholder: 'Upload image',
        label: 'Upload image',
    },
    {
        id: 'floatingDate',
        type: 'date',
        name: 'birthDate',
        completeName: 'date',
        placeholder: 'Birth date',
        label: 'Birth date',
    },
    {
        id: 'floatingPhone',
        type: 'number',
        name: 'phone',
        completeName: 'phoneNumber',
        placeholder: 'Phone number',
        label: 'Phone number',
    },
    {
        id: 'floatingField',
        type: 'text',
        name: 'field',
        completeName: 'field',
        placeholder: 'Field',
        label: 'Field',
    },
];

export const userFormInputSocialsProps = [
    {
        id: 'telegram',
        name: 'telegram',
        label: 'Telegram',
        placeholder: 'Telegram',
        icon: 'Telegram',
    },
    {
        id: 'instagram',
        name: 'instagram',
        label: 'Instagram',
        placeholder: 'Instagram',
        icon: 'Instagram',
    },
    {
        id: 'linkedin',
        name: 'linkedin',
        label: 'Linkedin',
        placeholder: 'Linkedin',
        icon: 'Linkedin',
    },
    {
        id: 'github',
        name: 'github',
        label: 'Github',
        placeholder: 'Github',
        icon: 'Github',
    },
];

export const dropdownItems = [
    {
        id: '1',
        path: '/user',
        name: 'Profile',
        icon: 'User',
    },
    {
        id: '2',
        path: '/my-articles',
        name: 'My articles',
        icon: 'Article',
    },
    {
        id: '3',
        path: '/my-stars',
        name: 'Stars',
        icon: 'Star',
    },
    {
        id: '4',
        path: '/appearance',
        name: 'Appearance',
        icon: 'Brush',
    },
];

export {default as Loader} from './loader';
export {default as Textarea} from './textarea';
export {default as ArticleForm} from './article-form';
export {default as Dropdown} from './dropdown';
export {default as Modal} from './modal';
export {default as Select} from './select';