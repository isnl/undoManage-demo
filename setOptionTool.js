/**
 * @description - 组件的高级参数设置工具类
 * @author - candy
 * @creationTime - 2019-08-13
 *
 * @修改人 - XXX
 * @修改记录 - XXX
 * @修改时间 - XXX
 *
 */
// import { UndoCommand } from '../../../core/utils/Undo';
class SetOptionTool extends UndoCommand {
  constructor(context) {
    super(context);
  }

  /**
   * @description 前进
   */
  execute() {
    // new Widget().render();
    this.context.render();
  }
  /**
   * @description 撤销
   */
  undo() {
    this.context.remove();
  }
}
// export default SetOptionTool;