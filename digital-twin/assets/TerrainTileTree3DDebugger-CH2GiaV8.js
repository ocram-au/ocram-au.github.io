import{a1 as a,P as s,j as t,ef as n,e as l,a as o}from"./index-ClOzeblJ.js";import{d as p}from"./TileTreeDebugger-BxKRcUMi.js";let i=class extends p{constructor(e){super(e),this.enablePolygons=!1}initialize(){a(()=>this.enabled,e=>this.view.basemapTerrain.renderPatchBorders=e,s)}getTiles(){const e=this.view.basemapTerrain.spatialReference!=null?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map(r=>({...r,lij:r.lij,geometry:t.fromExtent(n(r.extent,e))}))}};i=l([o("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],i);export{i as TerrainTileTree3DDebugger};