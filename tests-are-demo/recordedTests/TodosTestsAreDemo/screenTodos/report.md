
# TodosTestsAreDemo/screenTodos()

### undefined

---

## The following error was caught while running the test:

```
Error: There is no TestsAreDemoSlave singleton available. This might happen if somehow you run tests that are NOT in the IFrame of TestsAreDemoMaster (i.e. in TestsAreDemoSlave)
	  at get INSTANCE [as INSTANCE] [throw new Error("There is no TestsAreDemoSlave singleton available. This might happen if somehow you run tests that are NOT in the IFrame of TestsAreDemoMaster (i.e. in TestsAreDemoSlave)");] (http://localhost:3000TestsAreDemoSlave.tsx:258:19)
	  at MiniDb.get [TestsAreDemoSlave.INSTANCE.master.refMiniDbTableSetComponent.current?.forceUpdate();] (http://localhost:3000MiniDb.ts:57:27)
	  at MiniDb.getDerived [const valueFromDb = this.get(entityName, id, field);] (http://localhost:3000MiniDb.ts:63:34)
	  at TodosTestsAreDemo.screenTodos [await tad.assertWaitable.include(item.className, tad.miniDb.getDerived(entities.Todo, 1, fields.Todo.priority, colorHigh));] (http://localhost:3000TodosTestsAreDemo.tsx:25:69)
```

---


There are 0 screenshots. [Go to first](#screenshot-1)
