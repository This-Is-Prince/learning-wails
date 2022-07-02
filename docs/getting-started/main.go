package main

import (
	"context"
	"embed"
	"fmt"

	"getting-started/hello"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	app2 := NewApp2()
	hello1 := hello.NewHello()

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "Getting Started",
		Width:            1024,
		Height:           768,
		Assets:           assets,
		BackgroundColour: &options.RGBA{R: 255, G: 255, B: 255, A: 255},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			app2,
			hello1,
		},
	})

	if err != nil {
		println("Error:", err)
	}
}

type App2 struct {
	ctx context.Context
}

func NewApp2() *App2 {
	return &App2{}
}

func (a *App2) Greet2(name string) string {
	return fmt.Sprintf("Hello %s.", name)
}
