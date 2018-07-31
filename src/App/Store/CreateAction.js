export function createAction (type) {
    function action (data) {
        return { type, data }
    }
    action.type = type;

    return action;
}