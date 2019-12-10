// export class Undo {
class Undo {
  constructor(stack_count) {
    this.commands = [];
    this.stack_count = 20;//总共20步
    this.savePosition = -1;
    this.stackPosition = -1;
  }
  execute(command) {
    //如果大于20步
    if (this.stackPosition === this.stack_count - 1) {
      this.commands.splice(0, 1);
      this._clearRedo();
      command.execute();
      this.commands.push(command);
      this.stackPosition = this.stack_count - 1;
      this.changed();
    } else {
      this._clearRedo();
      command.execute();
      this.commands.push(command);
      this.stackPosition++;
      this.changed();
    }
    // EventEmitter.emit('change-undo-status', this.canUndo(), this.canRedo());
  }
  undo() {
    this.commands[this.stackPosition].undo();
    this.stackPosition--;
    this.changed();
  }
  canUndo() {
    return this.stackPosition >= 0;
  }
  redo() {
    this.stackPosition++;
    this.commands[this.stackPosition].redo();
    this.changed();
  }
  canRedo() {
    return this.stackPosition < this.commands.length - 1;
  }
  save() {
    this.savePosition = this.stackPosition;
    this.changed();
  }
  dirty() {
    return this.stackPosition !== this.savePosition;
  }
  _clearRedo() {
    // TODO there's probably a more efficient way for this
    this.commands = this.commands.slice(0, this.stackPosition + 1);
  }
  /**
   * @description 清空所有命令
   */
  clear() {
    this.savePosition = -1;
    this.stackPosition = -1;
    this.commands = [];
  }
  changed() {
    // do nothing, override
  }
}
/**
* @class 表示一个执行的命令
*/
// export class UndoCommand {
class UndoCommand {
  /**
   *Creates an instance of UndoCommand.  
   * @param {*} context  上下文例子 如果是容器的话主要为contianer和widget{contianr,widget}
   * @memberof UndoCommand
   */
  constructor(context) {
    this._name = "";
    this.context = context;
    if (new.target === UndoCommand) {
      throw new Error('抽象类不能实例化!');
    }
  }
  execute() {
    throw new Error('子类没有实现此方法!');
  }
  undo() {
    throw new Error('子类没有实现此方法!');
  }
  redo() {
    this.execute();
  }
}

