# moist

## Stack Overflow Question

I am reading everywhere that Omnisharp now supports configuration from the `.editorconfig`. However, everything that I've tried does not seem to work. Here is the most slim test that I can come up with, but what is wrong here?

**omnisharp.json**
```json
{
	"RoslynExtensionsOptions": {
		"enableAnalyzersSupport": true
	},
	"FormattingOptions": {
		"enableEditorConfigSupport": true
	}
}
```

**.editorconfig**
```
root = true

[*]
insert_final_newline = true
indent_size = 2
indent_style = tab
tab_width = 2
trim_trailing_whitespace = true
charset = utf-8

[*.cs]
csharp_new_line_before_else = true
```

**Program.cs**
```cs
using System;

namespace TestConsole
{
	class Program
	{
		static void Main(string[] args)
		{
			bool isPostCrisis = true;

			if (isPostCrisis) {
				Console.WriteLine("Hello World!");
			}
			else {
				Console.WriteLine("Hello Multiverse!");
			}
		}
	}
}
```

I can see that `"enableAnalyzersSupport": true` rule is working, but I don't see any feed back for `csharp_new_line_before_else = true`.

I am using:

* VS Code v1.42.1
* C# extension for VS Code v1.21.12
	* Omnisharp server v1.34.13 (included through parent extension)

