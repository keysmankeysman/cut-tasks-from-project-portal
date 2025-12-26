'use strict'

import axios from 'axios'

/**
 * Получить слои для тематического набора
 */
async function getLayers (thematicSetId) {
  const layers = await axios.get('/api/layers/' + thematicSetId)
  return layers.data
}

/**
 * Получить настройки слоев
 */

async function getSettings (layersIds) {
  const { data } = await axios.post('/api/layers/layers-settings', layersIds)
  return data
}

/**
 * Получить все слои.
 */
async function getAllLayers () {
  const layers = await axios.get('/api/administration/layers/')
  return layers.data
}

/**
 * Получить слой по ID.
 */
async function getLayer (id) {
  const layers = await axios.get('/analytics/layers/' + id)
  return layers.data
}

/**
 * Получить дерево слоев для тематического набора
 */
async function getLayersTree (thematicSetId) {
  const layers = await axios.get('/api/layers/' + thematicSetId + '/astree')
  return layers.data
}

async function getAdministrationLayersTree () {
  const layers = await axios.get('/api/administration/layerstree')
  return layers.data
}

async function getAdministrationResourceLayersTree () {
  const layers = await axios.get('/api/administration/resourcelayerstree')
  return layers.data
}

export { getLayers, getLayersTree, getAdministrationLayersTree, getAdministrationResourceLayersTree, getAllLayers, getLayer, getSettings }
