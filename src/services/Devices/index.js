import bowser from 'bowser';

export const isHandheld = () => Boolean(bowser.mobile || bowser.tablet);
