import { CLOSE_CODE_EDITOR, OPEN_CODE_EDITOR } from '../utils/events';

const DEFAULT_PRIORITY = 1000;

const ALL_FILTER = () => true;

const NO_OP = () => {};

export default ({ eventBus, priority = DEFAULT_PRIORITY, filter = ALL_FILTER, onOpen = NO_OP, onClose = NO_OP, useCallback, useEffect }) => {
  const handleOpen = useCallback((evt) => {
    if (!filter || filter(evt)) {
      eventBus.once(CLOSE_CODE_EDITOR, 10000, onClose);
      onOpen(evt);
    }
  }, [ eventBus, priority, onOpen, onClose ]);

  useEffect(() => {
    if (eventBus) {
      eventBus.on(OPEN_CODE_EDITOR, priority, handleOpen);
      return () => eventBus.off(OPEN_CODE_EDITOR, handleOpen);
    }
  }, [ eventBus, handleOpen ]);

  const openCodeEditor = useCallback(({ element, language, value }) => {
    if (eventBus) {
      eventBus.fire(OPEN_CODE_EDITOR, { element, language, value });
    }
  }, [ eventBus ]);

  const closeCodeEditor = useCallback(({ element, language, value }) => {
    if (eventBus) {
      eventBus.fire(CLOSE_CODE_EDITOR, { element, language, value });
    }
  }, [ eventBus ]);

  return [ openCodeEditor, closeCodeEditor ];
};
