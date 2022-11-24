/**
 * 待办事项接口
 */
export interface todo {
    /**
     * 唯一标识
     */
    id: number
    /**
     * 待办事项内容
     */
    content: string
    /**
     * 创建日期时间
     */
    dateTime: Date
    /**
     * 是否完成
     */
    isDone: boolean
}