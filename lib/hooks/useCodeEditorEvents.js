import { events } from '../';

const DEFAULT_PRIORITY = 1000;

const ALL_FILTER = () => true;

const NO_OP = () => {};

/**
 * The hook aims to simplify integration into code editor events.
 * <br/>
 * As sidenote, it is required to pass in both useCallback and useEffect because react implementation might vary.
 * It is necessary to use the React implementation for the current modeler component.
 * <br>
 * @param eventBus the current event bus
 * @param priority the priority for this hook that is used for event consumption
 * @param filter function that decides whether the current open event is relevant
 * @param onOpen handler what happens when opening a code editor was requested
 * @param onClose handler what happens when closing a code editor was requested
 * @param useCallback useCallback implementation for the environment
 * @param useEffect useCallback implementation for the environment
 * @return {[function,function]} functions to open or close the editor
 */
export default ({
  eventBus,
  priority = DEFAULT_PRIORITY,
  openFilter = ALL_FILTER,
  closeFilter = ALL_FILTER,
  onOpen = NO_OP,
  onClose = NO_OP,
  useCallback,
  useEffect,
}) => {
  const handleOpen = useCallback((evt) => {
    if (!openFilter || openFilter(evt)) {
      onOpen(evt);
    }
  }, [ onOpen, onClose ]);

  const handleClose = useCallback((evt) => {
    if (!closeFilter || closeFilter(evt)) {
      onClose(evt);
    }
  }, [ closeFilter, onClose ]);

  useEffect(() => {
    if (eventBus) {
      eventBus.on(events.OPEN_CODE_EDITOR, priority, handleOpen);
      eventBus.on(events.CLOSE_CODE_EDITOR, priority, handleClose);
      return () => {
        eventBus.off(events.OPEN_CODE_EDITOR, handleOpen);
        eventBus.off(events.CLOSE_CODE_EDITOR, handleClose);
      };
    }
  }, [ eventBus, handleOpen, handleClose ]);

  const openCodeEditor = useCallback(({ element, language, value }) => {
    if (eventBus) {
      eventBus.fire(events.OPEN_CODE_EDITOR, { element, language, value });
    }
  }, [ eventBus ]);

  const closeCodeEditor = useCallback(({ element, language, value }) => {
    if (eventBus) {
      eventBus.fire(events.CLOSE_CODE_EDITOR, { element, language, value });
    }
  }, [ eventBus ]);

  return [ openCodeEditor, closeCodeEditor ];
};
