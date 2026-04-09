export const shoppingList: string[] = ['milk', 'bread', 'eggs'];

interface ITaskData {
    taskId: string,
    assign: string,
    priority: number,
    createdAt: string
}

export const taskData:ITaskData = {
    taskId: '1',
    assign: 'Alice',
    priority: 1,
    createdAt: '2026-05-23'
}