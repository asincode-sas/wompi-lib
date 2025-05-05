import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import { axiosConfig } from '#axios.js'

describe('axios tests suite', () => {
  test('valida que el tipo de dato sea una funcion', () => {
    assert.strictEqual(typeof axiosConfig, 'function')
  })

  test('retorna una instancia de axios', () => {
    const axios = axiosConfig({
      baseURL: 'https://api.example.com/example',
      privateKey: 'myPrivateKey',
    })
    assert.strictEqual(typeof axios, 'function')
    assert.strictEqual(typeof axios.get, 'function')
  })
})