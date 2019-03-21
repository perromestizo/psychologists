export default ({
  isDisabled = false,
  eventValueSelector = event => event,
  eventValueKey = 'eventValue',
  callback,
  ...callbackArgs
}) => event => {
  if (!isDisabled) {
    callback({
      [eventValueKey]: eventValueSelector(event),
      ...callbackArgs
    });
  }
};
