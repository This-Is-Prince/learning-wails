package hello

import (
	"context"
	"fmt"
)

type Hello struct {
	ctx context.Context
}

func NewHello() *Hello {
	return &Hello{}
}

func (h *Hello) HelloBro() string {
	return fmt.Sprint("Hello Bro")
}
